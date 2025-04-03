import axios from "axios";

export default function myFunc(req, res) {
    if (req.method === "POST") {
        const { d } = req.body;
        console.log(d);

        let data = JSON.stringify(d);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://crm.quickintsolutions.in/api/resource/Opportunity',
            headers: {
                'Authorization': 'token 6e6fc73564ecc1a:5b440d0a61d875a',
                'Content-Type': 'application/json',
                'Cookie': 'full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image='
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                res.status(201).send({ message: "Data sent successfully" });
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                res.status(405).send({ message: "ERROR" });
                console.log(error);
            });
    } else {
        res.status(405).send({ message: "Only POST requests allowed" });
    }
}
