// controller

import { AppState } from "./AppState.js"
import { Racer } from "./models/Racer.js"


function _drawRacers() {
  let template = ''
  const racers = AppState.racers
  racers.forEach(r => template += r.Template)
  document.getElementById('racers').innerHTML = template
}

function _moveRacers() {
  const racers = AppState.racers
  racers.forEach(r => r.distance += Math.floor(Math.random() * 3))
  // move()
  // document.getElementById(racers.forEach(r => r)
}

export class RaceController {  
  constructor() {
    this.drawRacers()
  }
    drawRacers() {
  _drawRacers()
    }

    startRace() {
      setInterval(_moveRacers, 100)
    }
}