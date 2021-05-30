import { TweenMax as TM } from 'gsap'

export default class Mouse {
  clientX = -100
  clientY = -100
  mouse = null
  mousepos = {
    x: 0,
    y: 0
  }

  constructor(mouseRef) {
    this.mouse = mouseRef
    this.initEvents()
    requestAnimationFrame(() => this.render());
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
        break;
      default:
    }
  }
  removeEvents() {
    window.removeEventListener('mousemove', this)
  }
  render() {
    TM.set(this.mouse, {
      x: this.mousepos.x,
      y: this.mousepos.y
    });

    requestAnimationFrame(() => this.render())
  };
}
