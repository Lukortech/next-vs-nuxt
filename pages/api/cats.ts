import type { NextApiRequest, NextApiResponse } from 'next'

// Thanks to https://http.cat/

// Many features you'd normally have to write in node/express are handled by next!

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    switch (req.method) {
        //We can call for a post and see which pets I have or you can pass your own list for me to see.
        case "POST":
            req.body ?
            res.status(200).json(JSON.stringify(req.body)) : 
            res.status(200).json({ cats: ["Rengar", "Kha'zix"], catsNicknames: ["Renguś", "Kaziu"] });
            break;
        case "PUT":
            // We can try to put more cats into the cradle and the silver spoon
            res.redirect(301, `https://http.cat/${id}`);
            break;
        default:
            // Anything else will just let us see the greatest movie of all time.
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