import convert from 'xml-js';
export default function handler(req, res) {
    const searchParams = {
        // 'country': 'DE',
        // 'page.number': 10,
        // 'page.size': 200,
        // // 'sort.field': 'modificationTime',
        // 'sort.order': 'DESCENDING',
        // 'exteriorColor': 'BLACK, RED',
        'emissionClass': 'EURO3'

    };
    // res.status(200).json({ vehicule: 'Passat' })
    fetch(`https://services.mobile.de/search-api/search?classification=refdata/classes/Car/makes/PORSCHE`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + Buffer.from('DL_Automobile_Trade:Dlautomobile974!').toString('base64'),
            'Content-Type': 'application/xml',
            'Accept-Encoding': 'gzip',
            'Accept-Language': 'fr',

        }),

    }).then(res => res.text()).then(data => {
        // console.log('data:', data)
        // const parser = new DOMParser();
        // const xml = parser.parseFromString(data, "application/xml");
        // console.log('xml:', xml)
        let result = convert.xml2json(data, { compact: true, spaces: 4 })

        res.status(200).json(result)

    }).catch(console.error);
}
