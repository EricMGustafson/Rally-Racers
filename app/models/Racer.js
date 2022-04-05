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
    <div id="${this.number}" class="col-12 bg-dark text-light m-1 p-1">
    <span title="${this.name}">${this.picture}</span>
    </div>
    `
  }

  move() {
    if (this.distance >= 95) {
      this.distance = 95
    }
  }

}