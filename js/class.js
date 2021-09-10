"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    getActualMillage() {
        const realMillage = this._millage + 500000;
        return realMillage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const totyota = new Car('Totyota', 3000);
const totalPrice = totyota.getTotalPrice(25);
