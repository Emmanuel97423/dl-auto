import convert from 'xml-js';
export default function handler(req, res) {
    console.log('req:', req.body);
    const currentPage = parseInt(req.body)

    const searchParams = `roadworthy=1&price.min=2000&classification=refdata/classes/Car&sort.field=modificationTime&sort.order=DESCENDING&page.number=${req.body}&page.size=20`;
    if (req.body) {
        fetch(`https://services.mobile.de/search-api/search?${searchParams}`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Basic ' + Buffer.from(`${process.env.MOBILEDE_USER + ':' + process.env.MOBILEDE_PASSWORD}`).toString('base64'),
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
            // console.log('result:', result)
            res.status(200).json(result)

        }).catch(e => {
            console.log('error:', e)
            res.status(500).json(e)
        });
    } else if (req.body !== null) {
        fetch(`https://services.mobile.de/search-api/search?${searchParams}`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Basic ' + Buffer.from(`${process.env.MOBILEDE_USER + ':' + process.env.MOBILEDE_PASSWORD}`).toString('base64'),
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

        }).catch(e => {
            console.log('error:', e)
            res.status(500).json(e)
        });
    }
}
