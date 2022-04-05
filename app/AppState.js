import { Racer } from './models/Racer.js'

let racer1 = new Racer('Fox', '🦊', '1')
let racer2 = new Racer('Wolf', '🐺', '2')
let racer3 = new Racer('Peppy', '🐰', '3')
let racer4 = new Racer('Slippy', '🐸', '4')

export const AppState = {
  racers: [racer1, racer2, racer3, racer4]
}