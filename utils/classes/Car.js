import { Tax } from './Tax.js'

export class Car {
    constructor(data) {
        console.log('data:', data);

        this._data = data;
        // this._arrImage = data["ad:ad"]["ad:images"]["ad:image"];
        this._brand = data["ad:ad"]["ad:vehicle"]["ad:make"]["resource:local-description"]._text
        this._model = data["ad:ad"]["ad:vehicle"]["ad:model"]
        // this._fuel = data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:fuel"]["resource:local-description"]._text;
        this._kilometrage = data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:mileage"];
        this._priceHt = data["ad:ad"]["ad:price"]["ad:consumer-price-amount"]._attributes.value;
        this._cubicCapacity = data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:cubic-capacity"] ? data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:cubic-capacity"]._attributes.value : null;
        // this._licensedWeight = data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:licensed-weight"]._attributes.value;
        this._classVehicle = data["ad:ad"]["ad:vehicle"]["ad:class"]._attributes.key;
        this._category = data["ad:ad"]["ad:vehicle"]["ad:category"]._attributes.key;





    }
    set data(data) { return this._data = data; }
    get data() { return this._data };

    // set arrImage(arrImage) { return this._arrImage = arrImage }
    get arrImage() { return this._arrImage; }

    // get getCar() { return this.car };

    get getVehicleClass() {
        return this._classVehicle;
    }
    get images() {


        if (this._data["ad:ad"]["ad:images"]) {

            return this.carImages();
        }
        else if (this._data["ad:ad"]["ad:images"] === undefined) {

            return null;
        }

        else if (this._data["ad:ad"]["ad:images"]["ad:image"] === undefined) {
            return null
        } else {

        }

    };
    get brand() { return this._brand };
    get model() {
        if (this._model === undefined) {
            return null;
        } else {
            return this._data["ad:ad"]["ad:vehicle"]["ad:model"]["resource:local-description"]._text
        }
        // return this._data["ad:ad"]["ad:vehicle"]["ad:model"]["resource:local-description"] ? data["ad:ad"]["ad:vehicle"]["ad:model"]["resource:local-description"]._text : null 
    };
    get fuel() {
        if (this._data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:fuel"] === undefined) {
            return null;
        } else {
            return this._data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:fuel"]["resource:local-description"]._text
        }
    };
    get kilometrage() {
        if (this._data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:mileage"] === undefined) {
            return null;
        } else {
            return this._data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:mileage"]._attributes.value
        }
        return this._kilometrage
    };
    get power() { return this._data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:power"]._attributes.value }
    get cubicCapacity() { return this._cubicCapacity ? this._cubicCapacity : null }
    get licensedWeight() {
        return this._cubicCapacity ? this._cubicCapacity : null
    };
    get height() {

        if (this._category === 'Limousine' || this._category === 'Cabrio') {
            return 150;
        } else { return 170 }
    }
    get priceHt() { return this.carPriceHt() };
    get priceTtc() {
        return this.carPriceTtc();
    }
    carImages() {

        if (this._data["ad:ad"]["ad:images"]["ad:image"].length === undefined) {

            return null


        } else if (this._data["ad:ad"]["ad:images"]["ad:image"]) {
            return this._data["ad:ad"]["ad:images"]["ad:image"].map(images => {

                return images["ad:representation"][6]._attributes.url;
            })
        }

    };
    carPriceHt() {

        function numberWithSpaces(x) {

            // x.toFixed(0)
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        return numberWithSpaces(parseInt(this._priceHt).toFixed(0))
    }
    carPriceTtc() {
        const ttc = new Tax(this._cubicCapacity, this._priceHt, this.fuel);

        const priceTtc = ttc.getPriceTtc
        console.log('priceTtc:', priceTtc)
        function numberWithSpaces(x) {

            // x.toFixed(0)
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        return numberWithSpaces(priceTtc)
    }
}