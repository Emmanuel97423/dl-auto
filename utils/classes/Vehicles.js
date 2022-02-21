import noImagePlaceHolder from '../../public/no-image.jpg';
import Vehicle from './Car.js';
import { Tax } from './Tax.js';


export class VehicleFactory {
    constructor(data) {
        // console.log('data:', data)


        if (data["ad:vehicle"]["ad:class"]._attributes.key === 'Car') {
            this._data = data
        }
        // else {
        //     return null;
        // };
        // this._request = request;
        this._id = data._attributes.key;
        this._brand = data["ad:vehicle"]["ad:make"]["resource:local-description"]._text;

        if (data["ad:vehicle"]["ad:model"]) {
            this._model = data["ad:vehicle"]["ad:model"]["resource:local-description"]._text
        }
        if (data["ad:vehicle"]["ad:specifics"]["ad:mileage"]) {
            this._kilometrage = data["ad:vehicle"]["ad:specifics"]["ad:mileage"]._attributes.value;
        }
        if (data["ad:vehicle"]["ad:specifics"]["ad:fuel"]) {
            this.carburant = data["ad:vehicle"]["ad:specifics"]["ad:fuel"]["resource:local-description"]._text
        };

        this._price = data["ad:price"]["ad:consumer-price-amount"]._attributes.value;

        if (data["ad:images"]) {
            this._image = data["ad:images"]["ad:image"]["ad:representation"][1]._attributes.url;
        };
        this._cubicCapacity = data["ad:vehicle"]["ad:specifics"]["ad:cubic-capacity"] ? data["ad:vehicle"]["ad:specifics"]["ad:cubic-capacity"]._attributes.value : null;


    }
    get data() { return this._data };
    set data(data) { this._data = data };

    get request() { return this._request }
    set request(request) { this._request = request }

    get id() { return this._id };
    get brand() { return this._brand };

    get model() { return this._model ? this._model : null };
    set model(model) { return this._model = model };

    get kilometrage() { return this._kilometrage ? this._kilometrage : null };
    set kilometrage(kilometrage) { return this._kilometrage = kilometrage };

    get price() { return this.numberWithSpaces(parseInt(this._price).toFixed(0)) };

    get getPriceTtc() { return this.numberWithSpaces(parseInt(this.priceTtc().toFixed(0))) }
    get image() { return this._image ? this._image : noImagePlaceHolder };
    set image(image) { return this._image = image }

    get carburant() { return this._carburant };
    set carburant(carburant) { return this._carburant = carburant };


    get getConvert() {
        return this.convert()
    };
    get getVehicle() { return this.searchVehicle() }

    convert() {
        let obj = [];
        if (this._data["ad:vehicle"]["ad:model"]) {
            return obj = [
                {
                    'id': this._id,
                    'marque': this._brand,
                    'model': this._model,
                    'kilometrage': this._kilometrage,
                    'price': this._price,
                    'image': this._image,
                    'carburant': this._carburant,
                }
            ]

                ;
        }
    };

    searchVehicle() {
        const vehicle = new Vehicle(this._data);
        // vehicle.
    };
    numberWithSpaces(x) {

        // x.toFixed(0)
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    priceTtc() {
        const ttc = new Tax(this._cubicCapacity, this._price);
        return ttc.getPriceTtc;
    }
}