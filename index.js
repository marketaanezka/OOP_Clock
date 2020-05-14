const Clock = {
  constructor: function (hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  },
  hourUp: function () {
    this.hours += 1;
    if (this.hours === 24) {
      this.hours = 0;
    };
    //console.log(this.hours);
  },
  hourDown: function () {
    this.hours -= 1;
    if (this.hours === -1) {
      this.hours = 23
    };
    //console.log(this.hours);
  },
  minuteUp: function () {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) {
      this.hours = 0;
    };
    //console.log(this.minutes);
  },
  minuteDown: function () {
    this.minutes -= 1;
    if (this.minutes === -1) {
      this.minutes = 59;
      this.hours -= 1
    }
    if (this.hours === -1) {
      this.hours = 23;
    };
    //console.log(this.minutes);
  },

  show: function () {
    console.log(`Current time is: ${this.hours}:${this.minutes.toString().padStart(2, '0')}`)
  },
  //----------- adding DOM element, writing shortened functions as a(){}, ----------
  render() {
    const elm = document.createElement('div');
    elm.className = "clock";
    elm.innerHTML = `<span class="clock__hours">${this.hours}</span>
    <span class="colon">:</span>
    <span class="clock__minutes">${this.minutes.toString().padStart(2, '0')}</span>`
    return elm;
  },

  mount(parent) {
    parent.appendChild(this.render());
  }

}

const timeElm = document.querySelector(".time");

const currentTime = Object.create(Clock);
currentTime.constructor(5, 20);

const midnight = Object.create(Clock);
midnight.constructor(0, 0);

const minuteToMidnight = Object.create(Clock);
minuteToMidnight.constructor(23, 59);


/*const currentTime = {
  hours: 5,
  minutes: 00,
  __proto__: Clock,
}
const midnight = {
  hours: 0,
  minutes: 0,
  __proto__: Clock,
}
const minuteToMidnight = {
  hours: 23,
  minutes: 59,
  __proto__: Clock,
} */

