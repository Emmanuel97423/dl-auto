import noImagePlaceHolder from '../../public/no-image.jpg';
import Vehicle from './Car.js';
import { Tax } from './Tax.js';
import FilterPrice from './filter/Price'


export class VehicleFactory {
    constructor(data) {
        // console.log('data:', data["vehicle"]["specifics"]['condition']['local-description']['$'])


        if (data["vehicle"]["class"]['@key'] === 'Car') {
            this._data = data

        }

        this._id = data['@key'];

        this._brand = data["vehicle"]["make"]["local-description"]['$'];



        if (data["vehicle"]["model"]) {
            this._model = data["vehicle"]["model"]["local-description"]['$']

        }

        if (data["vehicle"]["specifics"]["mileage"]) {
            this._kilometrage = data["vehicle"]["specifics"]["mileage"]['@value'];

        }
        if (data["vehicle"]["specifics"]["fuel"]) {
            this.carburant = data["vehicle"]["specifics"]["fuel"]["local-description"]['$']

        };


        this._price = data["price"]["consumer-price-amount"]['@value'];


        // console.log('this._priceht:', this._price)

        if (data["images"]) {
            this._image = data["images"]["image"]["representation"][3]['@url'];

        };

        this._cubicCapacity = data["vehicle"]["specifics"]["cubic-capacity"] ? data["vehicle"]["specifics"]["cubic-capacity"]["@value"] : null;


        this._fuel = data["vehicle"]["specifics"]["fuel"] ? data["vehicle"]["specifics"]["fuel"]["local-description"]['$'] : null;


        this._vatable = data["price"]["vatable"]['@value'];
    }
    get data() { return this._data };
    set data(data) { this._data = data };

    get request() { return this._request }
    set request(request) { this._request = request };

    get id() { return this._id };

    get brand() { return this._brand };

    get model() { return this._model ? this._model : null };
    set model(model) { return this._model = model };

    get kilometrage() { return this._kilometrage ? this._kilometrage : null };
    set kilometrage(kilometrage) { return this._kilometrage = kilometrage };

    get condition() { return this._data["vehicle"]["specifics"]['condition']['local-description']['$'] }

    get price() { return this.numberWithSpaces(parseInt(this._price).toFixed(0)) };

    get getPriceTtc() { return this.numberWithSpaces(parseInt(this.priceTtc().toFixed(0))) };

    get image() { return this._image ? this._image : noImagePlaceHolder };

    set image(image) { return this._image = image };

    get fuel() { return this._fuel };
    set fuel(fuel) { return this._fuel = fuel };


    get getConvert() {
        return this.convert()
    };
    get getVehicle() { return this.searchVehicle() }

    // convert() {
    //     let obj = [];
    //     if (this._data["vehicle"]["model"]) {
    //         return obj = [
    //             {
    //                 'id': this._id,
    //                 'marque': this._brand,
    //                 'model': this._model,
    //                 'kilometrage': this._kilometrage,
    //                 'price': this._price,
    //                 'image': this._image,
    //                 'carburant': this._carburant,
    //             }
    //         ]

    //             ;
    //     }
    // };

    searchVehicle() {
        const vehicle = new Vehicle(this._data);
        // vehicle.
    };
    numberWithSpaces(x) {

        // x.toFixed(0)
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    priceTtc() {
        const ttc = new Tax(this._cubicCapacity, this._price, this._fuel, this._vatable);
        return ttc.getPriceTtc;
    };
    // filter() {
    //     if (this._request === 'byPrice') {
    //         const filterPriceClass = new FilterPrice(this._request)
    //     }
    // }
}