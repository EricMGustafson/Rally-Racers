export class Racer {
  constructor(name, picture, number, distance = 0) {
    this.name = name
    this.picture = picture
    this.number = number
    this.distance = distance
    this.move()
  }

  get Template() {
    return `
    <div class="col-12 bg-dark text-light m-1 p-1">
    <span id="${this.number}" title="${this.name}"  style="padding-left:0%;">${this.picture}</span>
    </div>
    `
  }

  move() {
    if (this.distance >= 95) {
      this.distance = 95
    }
  }

}