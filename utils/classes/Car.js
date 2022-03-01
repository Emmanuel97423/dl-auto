import { Tax } from './Tax.js'

export class Car {
    constructor(data) {
        this._data = data;
        // this._arrImage = data["ad"]["images"]["image"];
        this._brand = data["ad"]["vehicle"]["make"]["local-description"]['$']
        this._model = data["ad"]["vehicle"]["model"]
        this._fuel = data["ad"]["vehicle"]["specifics"]["fuel"] ? data["ad"]["vehicle"]["specifics"]["fuel"]["local-description"]['$'] : null;
        this._kilometrage = data["ad"]["vehicle"]["specifics"]["mileage"];
        this._priceHt = data["ad"]["price"]["consumer-price-amount"]['@value']
        this._cubicCapacity = data["ad"]["vehicle"]["specifics"]["cubic-capacity"] ? data["ad"]["vehicle"]["specifics"]["cubic-capacity"]['@value'] : null;
        // this._licensedWeight = data["ad"]["vehicle"]["specifics"]["licensed-weight"]._attributes.value;
        this._classVehicle = data["ad"]["vehicle"]["class"]['@key'];
        this._category = data["ad"]["vehicle"]["category"]['@key'];
        this._vatable = data["ad"]["price"]["vatable"]['@value']









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


        if (this._data["ad"]["images"]) {

            return this.carImages();
        }
        else if (this._data["ad"]["images"] === undefined) {

            return null;
        }

        else if (this._data["ad"]["images"]["image"] === undefined) {
            return null
        } else {

        }

    };
    get brand() { return this._data["ad"]["vehicle"]["make"]["local-description"] ? this._data["ad"]["vehicle"]["make"]["local-description"]['$'] : null };
    get model() {
        if (this._model === undefined) {
            return null;
        } else {
            return this._data["ad"]["vehicle"]["model"]["local-description"]['$']
        }
        // return this._data["ad"]["vehicle"]["model"]["local-description"] ? data["ad"]["vehicle"]["model"]["local-description"]._text : null 
    };
    get constructionDate() { return this._data['ad']["vehicle"]['specifics']["construction-year"] ? this._data.ad.vehicle.specifics["construction-year"]["@value"] : null }
    get fuel() {
        if (this._data["ad"]["vehicle"]["specifics"]["fuel"] === undefined) {
            return null;
        } else {
            return this._data["ad"]["vehicle"]["specifics"]["fuel"]["local-description"]['$']

        }
    };
    get kilometrage() {
        if (this._data["ad"]["vehicle"]["specifics"]["mileage"] === undefined) {
            return null;
        } else {
            return this._data["ad"]["vehicle"]["specifics"]["mileage"]['@value']
        }
        return this._kilometrage
    };
    get power() { return this._data["ad"]["vehicle"]["specifics"]["power"] ? this._data["ad"]["vehicle"]["specifics"]["power"]['@value'] : null }
    get cubicCapacity() { return this._cubicCapacity ? this._cubicCapacity : null }
    get licensedWeight() {
        return this._cubicCapacity ? this._cubicCapacity : null
    };
    get vatable() { return this._vatable };
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

        if (this._data["ad"]["images"]["image"].length === undefined) {

            return null


        } else if (this._data["ad"]["images"]["image"]) {
            return this._data["ad"]["images"]["image"].map(images => {

                return images["representation"][6]['@url'];
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
        const ttc = new Tax(this._cubicCapacity, this._priceHt, this._fuel, this._vatable);

        const priceTtc = ttc.getPriceTtc
        console.log('priceTtc:', priceTtc)

        function numberWithSpaces(x) {

            // x.toFixed(0)
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        return numberWithSpaces(priceTtc)
    }
}