class Car {
    model: string;
    price: number;
    private _millage: number;
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        this._millage = 50000;
    }
    getRealMillage(): number {
        return this._millage + 20000;
    }
    getTotalPrice(tax: number): number {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}

const toyota = new Car('toyota', 200000);
const totalPrice: number = toyota.getTotalPrice(25);