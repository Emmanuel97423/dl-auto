export class Tax {
    constructor(cubicCapacity, priceHt) {
        console.log('cubicCapacity:', cubicCapacity)
        this._cubicCapacity = parseInt(cubicCapacity);
        this._priceHt = parseInt(priceHt);
        // this._licensedWeight = licensedWeight;
        // this._classVehicle = classVehicle;
        // this._height = height;





    };
    set cubicCapacity(cubicCapacity) { return this._cubicCapacity = cubicCapacity };
    get cubicCapacity() { return this._cubicCapacity };

    set priceHt(priceHt) { this._priceHt = priceHt }
    get priceHt() { return this._priceHt }

    get GetFretToFr() {
        return this.fretToRun()
    }

    get getExpeDom() {
        return this.expedom()
    }

    get getPriceTtc() {
        return this.priceTtc();
    }

    fretToRun() {
        const franceToReunion = 1050;
        const fret = parseInt(this._priceHt) + franceToReunion;
        const assurance = fret * 0.015;
        console.log('fret + assurance:', fret + assurance)
        return Math.ceil(fret + assurance)

    }

    expedom() {
        const dedouanTtc = 352.63;
        const fretAllToFr = 1000;
        const vehicleUsedVerification = 500;
        const tsm = 3 * 67;
        console.log('tsm:', tsm)
        const vat = Math.ceil(this.fretToRun() * 0.085);
        console.log('vat:', vat);

        let om = "";
        const omr = Math.round(this.fretToRun() * 0.025);
        console.log('omr:', omr);

        if (this._cubicCapacity < 1000) {
            console.log('<1.0l')
            console.log('this.fretToRun() * 0.105:', this.fretToRun() * 0.105);
            om = this.fretToRun() * 0.105

        } else if (this._cubicCapacity < 1500) {
            console.log('<1.5l');
            om = Math.round(this.fretToRun() * 0.155);
            console.log('om:', om)

        } else if (this._cubicCapacity < 2000) {
            console.log('<2.0l');
            om = Math.round(this.fretToRun() * 0.205);
            console.log('om:', om)

        } else if (this._cubicCapacity < 2500) {
            console.log('<2.5l');
            om = Math.round(this.fretToRun() * 0.255);
            console.log('om:', om)

        } else {
            console.log('+2.5l');
            om = Math.round(this.fretToRun() * 0.340);
            console.log('om:', om)

        };
        const totalExpeDom = dedouanTtc + fretAllToFr + vehicleUsedVerification + tsm + vat + om + omr
        console.log('totalExpedom:', totalExpeDom)
        return totalExpeDom





    }
    marge() {
        if (this._priceHt < 17000) {
            return 500;
        } else if (this._priceHt < 20000) {
            return 1000;
        } else if (this._priceHt < 23999.99) {
            return 1500;
        } else if (this._priceHt > 24000) {
            return this._priceHt * 0.064;
        } else if (this._priceHt > 25000) {
            return this._priceHt * 0.065;
        } else if (this._priceHt > 26000) {
            return this._priceHt * 0.066;
        } else if (this._priceHt > 27000) {
            return this._priceHt * 0.067;
        } else if (this._priceHt > 28000) {
            return this._priceHt * 0.068;
        } else if (this._priceHt > 29000) {
            return this._priceHt * 0.069;
        } else if (this._priceHt > 30000) {
            return this._priceHt * 0.070;
        } else if (this._priceHt > 31000) {
            return this._priceHt * 0.071;
        } else if (this._priceHt > 32000) {
            return this._priceHt * 0.072;
        } else if (this._priceHt > 33000) {
            return this._priceHt * 0.073;
        } else if (this._priceHt > 34000) {
            return this._priceHt * 0.074;
        } else if (this._priceHt > 35000) {
            return this._priceHt * 0.075;
        } else if (this._priceHt > 36000) {
            return this._priceHt * 0.076;
        } else if (this._priceHt > 37000) {
            return this._priceHt * 0.077;
        } else if (this._priceHt > 38000) {
            return this._priceHt * 0.078;
        } else if (this._priceHt > 39000) {
            return this._priceHt * 0.079;
        } else if (this._priceHt > 40000) {
            return this._priceHt * 0.080;
        } else if (this._priceHt > 41000) {
            return this._priceHt * 0.081;
        } else if (this._priceHt > 42000) {
            return this._priceHt * 0.082;
        } else if (this._priceHt > 43000) {
            return this._priceHt * 0.083;
        } else if (this._priceHt > 44000) {
            return this._priceHt * 0.084;
        } else if (this._priceHt > 45000) {
            return this._priceHt * 0.085;
        } else if (this._priceHt > 46000) {
            return this._priceHt * 0.086;
        } else if (this._priceHt > 47000) {
            return this._priceHt * 0.087;
        } else if (this._priceHt > 48000) {
            return this._priceHt * 0.088;
        } else if (this._priceHt > 49000) {
            return this._priceHt * 0.089;
        } else if (this._priceHt > 50000) {
            return this._priceHt * 0.090;
        } else if (this._priceHt > 51000) {
            return this._priceHt * 0.091;
        } else if (this._priceHt > 52000) {
            return this._priceHt * 0.092;
        } else if (this._priceHt > 53000) {
            return this._priceHt * 0.093;
        } else if (this._priceHt > 54000) {
            return this._priceHt * 0.094;
        } else if (this._priceHt > 55000) {
            return this._priceHt * 0.095;
        } else if (this._priceHt > 56000) {
            return this._priceHt * 0.096;
        } else if (this._priceHt > 57000) {
            return this._priceHt * 0.097;
        } else if (this._priceHt > 58000) {
            return this._priceHt * 0.098;
        } else if (this._priceHt > 59000) {
            return this._priceHt * 0.099;
        } else if (this._priceHt > 60000) {
            return this._priceHt * 0.10;
        } else if (this._priceHt > 61000) {
            return this._priceHt * 0.101;
        } else if (this._priceHt > 62000) {
            return this._priceHt * 0.102;
        } else if (this._priceHt > 63000) {
            return this._priceHt * 0.103;
        } else if (this._priceHt > 64000) {
            return this._priceHt * 0.104;
        } else if (this._priceHt > 65000) {
            return this._priceHt * 0.105;
        } else if (this._priceHt > 66000) {
            return this._priceHt * 0.106;
        } else if (this._priceHt > 67000) {
            return this._priceHt * 0.107;
        } else if (this._priceHt > 68000) {
            return this._priceHt * 0.108;
        } else if (this._priceHt > 69000) {
            return this._priceHt * 0.109;
        } else {
            return this._priceHt * 0.12;
        }
    };
    priceTtc() {
        const ttc = this.fretToRun() + this.expedom() + (this.marge() + 1000)
        console.log('this._priceHt:', this._priceHt)
        console.log('this.marge():', this.marge())
        console.log('ttc:', ttc)
        return Math.ceil(ttc);
    }


}