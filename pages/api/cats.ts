import type { NextApiRequest, NextApiResponse } from 'next'
import { BreadcrumbJsonLd } from 'next-seo';

// Thanks to https://http.cat/

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    switch (req.method) {
        case "POST":
            req.body ?
            res.status(200).json(JSON.stringify(req.body)) : 
            res.status(200).json({ cats: ["Rengar", "Kha'zix"], catsNicknames: ["Renguś", "Kaziu"] });
            break;
        case "PUT":
            res.status(301).send(`https://http.cat/${id}`);
            break;
        default:
            res.status(418).send(`
                <html>
                    <body>
                        <h2>${418} - I am a teapot, you know.</h2>
                        <a href='https://en.wikipedia.org/wiki/Cats_(2019_film)'>https://en.wikipedia.org/wiki/Cats_(2019_film)</a>
                    </body>
                </html>
            `);
            break;
    }


}