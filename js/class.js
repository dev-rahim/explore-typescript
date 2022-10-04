"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 50000;
    }
    getRealMillage() {
        return this._millage + 20000;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('toyota', 200000);
const totalPrice = toyota.getTotalPrice(25);
