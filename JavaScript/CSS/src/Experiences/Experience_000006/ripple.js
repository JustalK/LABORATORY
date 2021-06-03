import { TweenMax as TM } from 'gsap'

export default class Ripple {

  constructor(button, svg) {
    this.timing = 0.75
    this.svg = svg
    this.button = button
    this.initEvents()
  }

  initEvents() {
    this.button.addEventListener('click', this)
  }

  handleEvent(event) {
    switch(event.type) {
      case 'click':
        const { offsetX, offsetY, target } = event
        const { offsetWidth, offsetHeight } = target
        const clientOffsetX = Math.abs((offsetWidth / 2) - offsetX)
        const clientOffsetY = Math.abs((offsetHeight / 2) - offsetY)
        const deltaX = (offsetWidth / 2) + clientOffsetX
        const deltaY = (offsetHeight / 2) + clientOffsetY
        const scale_ratio = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))

        TM.fromTo(this.svg, this.timing, {
          x: offsetX,
          y: offsetY,
          transformOrigin: '50% 50%',
          scale: 0,
          opacity: 1
        },{
          scale: scale_ratio,
          opacity: 0
        });
        break
      default:
    }
  }

  removeEvents() {
    this.button.removeEventListener('click', this)
  }
}
