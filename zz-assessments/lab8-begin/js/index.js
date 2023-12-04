import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import image from 'url:../img/f1_car.png';
import {Car} from './models/car.js';

let race = document.querySelector(".car-race");

const racers = [
    "rick",
    "dan",
    "steve",
    "robbin"
];

racers.map((racerName)=> {
    let car = new Car(racerName, image);
    // Put code here to implement the following.
    // Add a car to the race.
    // drive the car.
    
});





