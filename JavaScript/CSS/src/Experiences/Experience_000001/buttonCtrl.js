export default class ButtonCtrl {
  // The state of the button
  state = {
    hover: false
  };
  // The position of the mouse
  mousepos = {
    x: 0,
    y: 0
  }
  // The position of the elements
  renderedStyles = {
      tx: {previous: 0, current: 0, amt: 0.1},
      ty: {previous: 0, current: 0, amt: 0.1}
  };

  /**
  * The constructor of the magnetic button
  * @param {Object} el The dome object of the button
  **/
  constructor(el) {
    this.DOM = {
      el: el,
      text: el.firstChild,
      textinner: el.firstChild.firstChild
    };
    this.calculateSizePosition();
    this.initEvents();
    requestAnimationFrame(() => this.render());
  }
  /**
  * Calculate the position of the object and the minimale distance
  **/
  calculateSizePosition() {
    this.rect = this.DOM.el.getBoundingClientRect();
    this.distanceToTrigger = this.rect.width*1.7;
  }
  /**
  * Add the event to the button
  **/
  initEvents() {
    window.addEventListener('resize', this);
    window.addEventListener('mousemove', this);
  }
  /**
  * Remove all the event link to the button
  * This is a proper way to unlink when the component get remove
  **/
  removeEvents() {
    window.removeEventListener('resize', this);
    window.removeEventListener('mousemove', this);
  }
  /**
  * Manage the event of the object
  * This is a special function of JavaScript (so thelink is automatic)
  **/
  handleEvent(event) {
    switch(event.type) {
      case 'resize':
        this.calculateSizePosition()
        break;
      case 'mousemove':
        this.mousepos = {
          x : event.clientX,
          y : event.clientY
        }
        break;
      default:
    }
  }
  /**
  * Render the effect of the button
  **/
  render() {
    // calculate the distance from the mouse to the center of the button
    const distanceMouseButton = this.distance(this.mousepos.x+window.scrollX, this.mousepos.y+window.scrollY, this.rect.left + this.rect.width/2, this.rect.top + this.rect.height/2);
    // new values for the translations
    let x = 0;
    let y = 0;

    if ( distanceMouseButton < this.distanceToTrigger ) {
        if ( !this.state.hover ) {
            this.enter();
            this.state.hover = !this.state.hover
        }
        x = (this.mousepos.x + window.scrollX - (this.rect.left + this.rect.width/2))*.3;
        y = (this.mousepos.y + window.scrollY - (this.rect.top + this.rect.height/2))*.3;
    }
    else if ( this.state.hover ) {
        this.leave();
        this.state.hover = !this.state.hover
    }

    this.renderedStyles['tx'].current = x;
    this.renderedStyles['ty'].current = y;

    for (const key in this.renderedStyles ) {
        this.renderedStyles[key].previous = this.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
    }

    this.DOM.el.style.transform = `translate3d(${this.renderedStyles['tx'].previous}px, ${this.renderedStyles['ty'].previous}px, 0)`;
    this.DOM.text.style.transform = `translate3d(${-this.renderedStyles['tx'].previous*0.6}px, ${-this.renderedStyles['ty'].previous*0.6}px, 0)`;

    requestAnimationFrame(() => this.render());
  }
  /**
  * The function play when the button enter the effect
  **/
  enter() {
    console.log('enter')
  }
  /**
  * The function play when the button leave the effect
  **/
  leave() {
    console.log('leave')
  }
  /**
  * Calculate the lerp
  **/
  lerp(a, b, n) {
    return (1 - n) * a + n * b;
  }
  /**
  * Calculate the hypothenuse
  * Use for calculating the distance between mouse and the center of the button
  **/
  distance(x1,y1,x2,y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.hypot(a,b);
  }
}
