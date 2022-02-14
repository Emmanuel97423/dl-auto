import convert from 'xml-js';
export class Category {
    constructor(request) {

        this._request = request;
        // this._page = page;
        // this._paginationNumber = panigationNumber;
    }
    get request() { return this._request; }
    set request(request) { return this._request }

    get getData() { return this.data() }

    async data() {
        fetch(`http://localhost:3000/api/vehicules/categories`, {
            method: 'GET',

        }).then(res => {
            console.log('res:', res)

            // console.log('data:', data)
            // const parser = new DOMParser();
            // const xml = parser.parseFromString(data, "application/xml");
            // console.log('xml:', xml)
            // let result = convert.xml2json(data, { compact: true, spaces: 4 })
            // console.log('result:', result)


        }).catch(console.error);
    }
}