import convert from 'xml-js';

export default function handler(req, res) {

    fetch(`https://services.mobile.de/refdata/classes/Car/categories`, {
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
        console.log('result:', result)

        res.status(200).json(result)

    }).catch(console.error);

}
