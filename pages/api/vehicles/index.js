import convert from 'xml-js';
import xml2js from 'xml2js';
import { parse, stringify, toJSON, fromJSON } from 'flatted';
import axios from 'axios'
export default function handler(req, res) {
    console.log('req: get axios');
    // const currentPage = parseInt(req.body)
    let headerConfig = {
        headers:
        {
            'Authorization': 'Basic ' + Buffer.from(`${process.env.MOBILEDE_USER + ':' + process.env.MOBILEDE_PASSWORD}`).toString('base64'),
            'Content-Type': 'application/xml',
            'Accept-Encoding': 'gzip',
            'Accept-Language': 'fr',
            "X-Requested-With": "XMLHttpRequest"
        }


    }


    const searchParams = `imageCount.min=6&roadworthy=1&price.min=2000&accidentDamaged=0&classification=refdata/classes/Car&sort.field=modificationTime&sort.order=DESCENDING&page.number=1&page.size=20`;
    if (!req.body) {


        axios.get(`https://services.mobile.de/search-api/search?${searchParams}`, headerConfig).then(response => {
            console.log('response:', response.data['search-result']);
            const result = response.data;

            res.status(200).json(result)





        }).catch(e => {
            console.log('error:', e)
            res.status(500).json(e)
        });

        // fetch(`https://services.mobile.de/search-api/search?${searchParams}`, {
        //     method: 'GET',
        //     headers: new Headers({
        //         'Authorization': 'Basic ' + Buffer.from(`${process.env.MOBILEDE_USER + ':' + process.env.MOBILEDE_PASSWORD}`).toString('base64'),
        //         'Content-Type': 'application/xml',
        //         'Accept-Encoding': 'gzip',
        //         'Accept-Language': 'fr',
        //     }),

        // }).then(res => res.text()).then(data => {
        //     // console.log('data:', data)
        //     // const parser = new DOMParser();
        //     // const xml = parser.parseFromString(data, "application/xml");
        //     // console.log('xml:', xml)
        //     let result = convert.xml2json(data, { compact: true, spaces: 4 })
        //     // console.log('result:', result)
        //     res.status(200).json(result)

        // }).catch(e => {
        //     console.log('error:', e)
        //     res.status(500).json(e)
        // });
    }
    // else if (req.body) {
    //     const page = parseInt(req.body.page)
    //     const checkingDate = req.body.dateCheck
    //     console.log('checkingDate:', checkingDate)
    //     const searchParamsWithBody = `imageCount.min=6&modificationTime.max=${checkingDate}&roadworthy=1&price.min=2000&accidentDamaged=0&classification=refdata/classes/Car&sort.field=modificationTime&sort.order=DESCENDING&page.number=${page}&page.size=50`
    //     fetch(`https://services.mobile.de/search-api/search?${searchParamsWithBody}`, {
    //         method: 'GET',
    //         headers: new Headers({
    //             'Authorization': 'Basic ' + Buffer.from(`${process.env.MOBILEDE_USER + ':' + process.env.MOBILEDE_PASSWORD}`).toString('base64'),
    //             'Content-Type': 'application/xml',
    //             'Accept-Encoding': 'gzip',
    //             'Accept-Language': 'fr',
    //         }),

    //     }).then(res => res.text()).then(data => {
    //         // console.log('data:', data)
    //         // const parser = new DOMParser();
    //         // const xml = parser.parseFromString(data, "application/xml");
    //         // console.log('xml:', xml)
    //         let result = convert.xml2json(data, { compact: true, spaces: 4 })

    //         res.status(200).json(result)

    //     }).catch(e => {
    //         console.log('error:', e)
    //         res.status(500).json(e)
    //     });
    // }
}
