class Vehicle {
    constructor(emoji, speed) {
        this.emoji = emoji;
        this.speed = speed;
    }

    addToPage(){
        const path = document.createElement("MARQUEE");
        const speedDisplay = document.createElement("span");
        speedDisplay.innerText = this.speed + 'km/h'
        path.innerText = this.emoji;
        path.appendChild(speedDisplay);
        path.scrollAmount = this.speed;
        document.body.appendChild(path);
    }
}

function vehicleSpeed(){
    return Math.floor(Math.random() * 10);
}

const bicycle = new Vehicle("🚲", vehicleSpeed());
bicycle.addToPage();
const moto = new Vehicle("🏍️", vehicleSpeed());
moto.addToPage();
const scooter = new Vehicle("🛵", vehicleSpeed());
scooter.addToPage();