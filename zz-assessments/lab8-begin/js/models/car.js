export class Car {
	constructor(driverName, carImage) {
		this.name = driverName;
		this.image = carImage;
		this.speed = Math.random()*2;
		this.distance = 0;
		this.element = this.createCarUIElement();
	}

	createCarUIElement () {
		let car = document.createElement("div");
		let carDetails =
		`
		<img class="car" src=${this.image}>
		<div>${this.name}</div>
		`
		car.innerHTML = carDetails;
		return car;
	}

	addToRace(raceElement) {
		// Put code here to append this.element to raceElement.
		
	}

	drive() {
		let s = setInterval(()=> {
			// Put code here to implement the following:
			// add the random this.speed to this.distance.
			// change the this.element marginLeft to this.distance.
			// if this.distance is > 500 stop the timer.

		}, 10);
	}
}
