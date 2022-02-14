import noImagePlaceHolder from '../public/no-image.jpg'

export class Vehicle {
    constructor(data) {


        this._data = data;
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
        }





    }
    get data() { return this._data };
    set data(data) { this._data = data };

    get id() { return this._id };
    get brand() { return this._brand };

    get model() { return this._model ? this._model : null };
    set model(model) { return this._model = model };

    get kilometrage() { return this._kilometrage ? this._kilometrage : null };
    set kilometrage(kilometrage) { return this._kilometrage = kilometrage };

    get price() { return this._price };

    get image() { return this._image ? this._image : noImagePlaceHolder };
    set image(image) { return this._image = image }

    get carburant() { return this._carburant };
    set carburant(carburant) { return this._carburant = carburant };


    get getConvert() {
        return this.convert()
    }

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
    }
}