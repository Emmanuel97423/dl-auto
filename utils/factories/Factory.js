import { Car } from '../classes/Car.js'
export class Factory {
    constructor(data, request) {
        this._data = data;
        this._request = request;
    };
    get data() { return this._data };
    get request() { return this._request; };


    get filter() {

        if (this._request === 'car') {
            return this.filterCar();

        }
    };

    filterCar() {
        const car = new Car(this._data);
        return car.getFilter
    }
}