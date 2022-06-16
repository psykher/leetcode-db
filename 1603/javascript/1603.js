// node 1613.js

class ParkingSystem {
    spaceArr = [];

    constructor(big, medium, small) {
        this.spaceArr.push(big);
        this.spaceArr.push(medium);
        this.spaceArr.push(small);
    }

    addCar(carType) {
        let canPark = ((this.spaceArr[carType - 1] || 0) >= 1) ? true : false;
        this.spaceArr[carType - 1] += (canPark) ? -1 : 0;
        return canPark;
    }
}

let obj = new ParkingSystem(1, 1, 0);

console.log(obj.addCar(1));
console.log(obj.addCar(2));
console.log(obj.addCar(3));
console.log(obj.addCar(1));
