import Paper from 'paper'

export default class Circle {
  points = 25
  length = 35
  mousepos = {
    x: 0,
    y: 0
  }

  constructor(circleRef) {
    this.canvas = circleRef
    Paper.setup(this.canvas);

    // the base shape for the noisy circle
    this.segments = Array.from({length: this.points}).map((_, index) => {
      return new Paper.Point(200 + index * this.length, 800)
    })
    this.path = new Paper.Path(this.segments);
    this.path.strokeColor = '#000'
    this.path.strokeWidth = 5
    this.path.strokeCap = 'round'

    this.initEvents()
  }
  initEvents() {
    window.addEventListener('mousemove', this)
  }
  handleEvent(event) {
    switch(event.type) {
      case 'mousemove':
        this.mousepos = {
          x : event.clientX,
          y : event.clientY
        }
        this.path.firstSegment.point = this.mousepos

        Array.from({length: this.points - 1}).map((_, i) => {
          var segment = this.path.segments[i];
          var nextSegment = segment.next;
          var vector = new Paper.Point({
            x: segment.point.x - nextSegment.point.x,
            y: segment.point.y - nextSegment.point.y
          })
          vector.length = this.length;

          nextSegment.point = {
            x: segment.point.x - vector.x,
            y: segment.point.y - vector.y
          }
          return null
        })
        this.path.smooth({ type: 'continuous' });
        break
      default:
    }
  }
  removeEvents() {
    window.removeEventListener('mousemove', this)
  }
}
