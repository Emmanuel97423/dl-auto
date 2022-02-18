export class Car {
    constructor(data) {
        console.log('data:', data)
        this._data = data;
        // this._arrImage = data["ad:ad"]["ad:images"]["ad:image"];
        this._brand = data["ad:ad"]["ad:vehicle"]["ad:make"]["resource:local-description"]._text
        this._model = data["ad:ad"]["ad:vehicle"]["ad:model"]
        // this._fuel = data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:fuel"]["resource:local-description"]._text;
        this._kilometrage = data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:mileage"];
        this._priceHt = data["ad:ad"]["ad:price"]["ad:consumer-price-amount"]._attributes.value;




    }
    set data(data) { return this._data = data; }
    get data() { return this._data };

    set arrImage(arrImage) { return this._arrImage = arrImage }
    get arrImage() { return this._arrImage; }

    get getFilter() { return this.filter() };

    get getCar() { return this.car }

    get images() {
        if (this._data["ad:ad"]["ad:images"] === undefined) {
            return null;
        } else {
            return this.carImages()
        }
        return this.carImages()
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
    // set model(model) { this._model = model };

    get fuel() {
        if (this._data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:fuel"] === undefined) {
            return null;
        } else {
            return data["ad:ad"]["ad:vehicle"]["ad:specifics"]["ad:fuel"]["resource:local-description"]._text
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
    get priceHt() { return this.carPriceHt() }

    filter() {
        // console.log('data:', this._data)
        // console.log('this._arrImage:', this._arrImage)
        // this.images()
    }
    carImages() {
        return this._data["ad:ad"]["ad:images"]["ad:image"].map(images => {

            return images["ad:representation"][6]._attributes.url;
        })
    };
    carPriceHt() {

        function numberWithSpaces(x) {

            // x.toFixed(0)
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        return numberWithSpaces(parseInt(this._priceHt).toFixed(0))
    }
}