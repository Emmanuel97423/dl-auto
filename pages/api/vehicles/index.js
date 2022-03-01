import axios from 'axios';

export default function handler(req, res) {
    let headerConfig = {
        headers:
        {
            'Authorization': 'Basic ' + Buffer.from(`${process.env.MOBILEDE_USER + ':' + process.env.MOBILEDE_PASSWORD}`).toString('base64'),
            'Content-Type': 'application/xml',
            'Accept-Encoding': 'gzip',
            'Accept-Language': 'fr',
            "X-Requested-With": "XMLHttpRequest"
        }
    };
    const searchParams = `imageCount.min=6&roadworthy=1&price.min=2000&accidentDamaged=0&classification=refdata/classes/Car&sort.field=modificationTime&sort.order=DESCENDING&page.number=1&page.size=35`;
    if (!req.body) {
        axios.get(`https://services.mobile.de/search-api/search?${searchParams}`, headerConfig).then(response => {
            const result = response.data;
            res.status(200).json(result);
        }).catch(e => {
            console.log('error:', e);
            res.status(500).json(e);
        });
    } else if (req.body) {
        const page = req.body.page;
        const searchParamsWithBody = `imageCount.min=6&roadworthy=1&price.min=2000&accidentDamaged=0&classification=refdata/classes/Car&sort.field=modificationTime&sort.order=DESCENDING&page.number=${page}&page.size=35`;
        axios.get(`https://services.mobile.de/search-api/search?${searchParamsWithBody}`, headerConfig).then(response => {
            const result = response.data;
            res.status(200).json(result);
        }).catch(e => {
            console.log('error:', e);
            res.status(500).json(e);
        });
    };
};
