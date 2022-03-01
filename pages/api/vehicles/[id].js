import axios from 'axios';

export default function handler(req, res) {
    console.log('req:', req.body);
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
    const vehicleId = req.body;
    if (vehicleId) {
        axios.get(`https://services.mobile.de/search-api/ad/${vehicleId}`, headerConfig).then((response) => {
            const data = response.data;
            res.status(200).json(data);
        }).catch(e => {
            console.log('error', e);
            res.status(500).json({ message: 'Api error' });
        });
    } else {
        res.status(404).json({ message: 'véhicule non disponible' });
    };
};
