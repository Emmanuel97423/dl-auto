import { VehicleFactory } from '../Vehicles'
export default class FilterPrice {
    constructor(data, request) {


        this._data = data;

        this._request = request;
        this._minPrice = request[0] * 1000;
        console.log('this._minPrice:', this._minPrice)
        this._maxPrice = request[1] * 1000;
        console.log('this._maxPrice:', this._maxPrice)
    }
    set data(data) { return this._data = data };
    get data() { return this._data };

    get getFilter() { return this.filter() }

    filter() {
        const convertStringToInt = (str) => {
            return str.replace(" ", "")
        }
        // console.log('this._data:', this._data);
        // this._data.map(item => {
        //     const vehicle = new VehicleFactory(item);
        //     console.log('vehicle:', vehicle.getPriceTtc)

        // });
        return this._data.filter(item => {
            const vehicle = new VehicleFactory(item);
            console.log('parseInt(vehicle.getPriceTtc):', convertStringToInt(vehicle.getPriceTtc))
            if (convertStringToInt(vehicle.getPriceTtc) >= this._minPrice && convertStringToInt(vehicle.getPriceTtc) <= this._maxPrice) {

                console.log('vehicle:', item);
                return item
            }


        })

    }
}