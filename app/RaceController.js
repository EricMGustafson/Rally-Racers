// controller

import { AppState } from "./AppState.js"

function _drawRacers() {
  let template = ''
  const racers = AppState.racers
  racers.forEach(r => template += r.Template)
  document.getElementById('racers').innerHTML = template
}

function _startRace() {
  setInterval(_moveRacers, 100)

}

function _moveRacers() {
  const racers = AppState.racers
  racers.forEach(r => r.distance += Math.floor(Math.random() * 3))
  racers.forEach(r => r.move())
  racers.forEach(r => document.getElementById(r.number).style.paddingLeft = r.distance + '%')
}

function _resetRace(){
  const racers = AppState.racers
  racers.forEach (r => r.distance = 0)
}

export class RaceController {  
  constructor() {
    this.drawRacers()
  }
  drawRacers() {
    _drawRacers()
  }
  
  startRace() {
    _startRace()
  }

  resetRace() {
    _resetRace()
  }
}