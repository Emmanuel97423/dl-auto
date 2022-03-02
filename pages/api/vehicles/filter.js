import axios from 'axios';
export default function handler(req, res) {
    console.log('req:', req.body)

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

    if (req.body.filter.condition.lenght > 0) {
        const searchParams = `condition=${req.body.filter.condition}&imageCount.min=6&roadworthy=1&price.min=2000&accidentDamaged=0&classification=refdata/classes/Car&sort.field=modificationTime&sort.order=DESCENDING&page.number=1&page.size=35`;
        axios.get(`https://services.mobile.de/search-api/search?${searchParams}`, headerConfig).then(response => {
            const result = response.data;
            console.log('result:', result)
            res.status(200).json(result);
        }).catch(e => {
            console.log('error:', e);
            res.status(500).json(e);
        });
    }
}