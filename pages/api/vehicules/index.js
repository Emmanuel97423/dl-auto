import convert from 'xml-js';
export default function handler(req, res) {

    // res.status(200).json({ vehicule: 'Passat' })
    fetch('https://services.mobile.de/search-api/search?exteriorColor=BLACK&exteriorColor=RED&modificationTime.min=2008-05-04T18:13:51.0Z&firstRegistrationDate.min=2008-05', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + Buffer.from('DL_Automobile_Trade:Dlautomobile974!').toString('base64'),
            'Content-Type': 'application/xml'
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
