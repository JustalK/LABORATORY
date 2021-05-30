import Paper from 'paper'
import SimplexNoise from 'simplex-noise'

export default class Circle {
  lastX = 0
  lastY = 0
  isStuck = false
  showCursor = false
  group = null
  stuckX = null
  stuckY = null
  fillOuterCursor = null
  noiseObjects = null
  bigCoordinates = null
  shapeBounds = {
    width: 75,
    height: 75
  };
  noiseScale = 150
  noiseRange = 4
  isNoisy = false
  mousepos = {
    x: 0,
    y: 0
  }

  constructor(circleRef) {
    this.canvas = circleRef
    Paper.setup(this.canvas);
    const strokeColor = "rgba(255, 0, 0, 0.5)";
    const strokeWidth = 1;
    const segments = 8;
    const radius = 15;

    // the base shape for the noisy circle
    this.polygon = new Paper.Path.RegularPolygon(
      new Paper.Point(0, 0),
      segments,
      radius
    );
    this.polygon.strokeColor = strokeColor;
    this.polygon.strokeWidth = strokeWidth;
    this.polygon.smooth();
    this.group = new Paper.Group([this.polygon]);
    this.group.applyMatrix = false;

    this.noiseObjects = this.polygon.segments.map(() => new SimplexNoise());
    this.bigCoordinates = [];
    this.initEvents()
    requestAnimationFrame(() => this.render());
  }
  initEvents() {
    window.addEventListener('mousemove', this)
    const linkItems = document.querySelectorAll(".link");
    linkItems.forEach(item => {
      item.addEventListener("mouseenter", this);
      item.addEventListener("mouseleave", this);
    });
  }
  handleEvent(event) {
    switch(event.type) {
      case 'mousemove':
        this.mousepos = {
          x : event.clientX,
          y : event.clientY
        }
        break
      case 'mouseenter':
        const navItem = event.currentTarget
        const navItemBox = navItem.getBoundingClientRect()
        this.stuckX = Math.round(navItemBox.left + navItemBox.width / 2)
        this.stuckY = Math.round(navItemBox.top + navItemBox.height / 2)
        this.isStuck = true
        break
      case 'mouseleave':
        this.isStuck = false
        break
      default:
    }
  }
  removeEvents() {
    window.removeEventListener('mousemove', this)
  }

  lerp(a, b, n) {
    return (1 - n) * a + n * b;
  }

  map(value, in_min, in_max, out_min, out_max) {
    return (
      ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  }

  render() {
    Paper.view.onFrame = event => {
      // using linear interpolation, the circle will move 0.2 (20%)
      // of the distance between its current position and the mouse
      // coordinates per Frame
      if (!this.isStuck) {
        // move circle around normally
        this.lastX = this.lerp(this.lastX, this.mousepos.x, 0.2);
        this.lastY = this.lerp(this.lastY, this.mousepos.y, 0.2);
        this.group.position = new Paper.Point(this.lastX, this.lastY);
      } else if (this.isStuck) {
        // fixed position on a nav item
        this.lastX = this.lerp(this.lastX, this.stuckX, 0.2);
        this.lastY = this.lerp(this.lastY, this.stuckY, 0.2);
        this.group.position = new Paper.Point(this.lastX, this.lastY);
      }

      if (this.isStuck && this.polygon.bounds.width < this.shapeBounds.width) {
        // scale up the shape
        this.polygon.scale(1.08);
      } else if (!this.isStuck && this.polygon.bounds.width > 30) {
        // remove noise
        if (this.isNoisy) {
          this.polygon.segments.forEach((segment, i) => {
            segment.point.set(this.bigCoordinates[i][0], this.bigCoordinates[i][1]);
          });
          this.isNoisy = false;
          this.bigCoordinates = [];
        }
        // scale down the shape
        const scaleDown = 0.92;
        this.polygon.scale(scaleDown);
      }

      // while stuck and big, apply simplex noise
      if (this.isStuck && this.polygon.bounds.width >= this.shapeBounds.width) {
        this.isNoisy = true;
        // first get coordinates of large circle
        if (this.bigCoordinates.length === 0) {
          this.polygon.segments.forEach((segment, i) => {
            this.bigCoordinates[i] = [segment.point.x, segment.point.y];
          });
        }

        // loop over all points of the polygon
        this.polygon.segments.forEach((segment, i) => {

          // get new noise value
          // we divide event.count by noiseScale to get a very smooth value
          const noiseX = this.noiseObjects[i].noise2D(event.count / this.noiseScale, 0);
          const noiseY = this.noiseObjects[i].noise2D(event.count / this.noiseScale, 1);

          // map the noise value to our defined range
          const distortionX = this.map(noiseX, -1, 1, -this.noiseRange, this.noiseRange);
          const distortionY = this.map(noiseY, -1, 1, -this.noiseRange, this.noiseRange);

          // apply distortion to coordinates
          const newX = this.bigCoordinates[i][0] + distortionX;
          const newY = this.bigCoordinates[i][1] + distortionY;

          // set new (noisy) coodrindate of point
          segment.point.set(newX, newY);
        });

      }
      this.polygon.smooth();
    }
  };
}
