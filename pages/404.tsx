import { NextSeo } from 'next-seo'

const NotFound = () => (
    <>
        <NextSeo
            title="Ooops, a wild 404!"
            description="Why not work on your SEO today?"
        />
        <div className="container vh-100">
            <div className="row h-100">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                    <div className="shadow-lg w-50 h-25 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-danger mb-4">Not found, sorry!</h1>
                        <h3 className="text-secondary">404, I guess.</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default NotFound;