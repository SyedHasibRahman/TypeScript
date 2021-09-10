class Car {
    model: string;
    price: number;
    private _millage: number;
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    getActualMillage(): number {
        const realMillage = this._millage + 500000;
        return realMillage;
    }
    getTotalPrice(tax: number): number {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
} const totyota = new Car('Totyota', 3000);

const totalPrice: number = totyota.getTotalPrice(25);