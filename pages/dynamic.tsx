import { GetStaticProps } from "next";

const apiUrl = `https://api.twitter.com/2/tweets/${process.env.TWEET_ID}/liking_users`

export async function fetchTweetLikes() {
    let res = null;

    try {
        res = await fetch(apiUrl, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                Authorization: `Bearer ${process.env.BEARER_TOKEN}`
            },
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });
    } catch (e) {
        console.error(e);
    }

    if (res?.status === 200) return res.json();
    else return res;
}

export const getStaticProps: GetStaticProps = async () => {
    const tweet = await fetchTweetLikes();

    return {
        revalidate: 10,
        props: { tweet }
    };
}

const DynamicPage = ({ tweet }) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h2>Hellow from DynamicPage!</h2>
                    <p>People supporting me today: {tweet.meta.result_count}</p>
                </div>
            </div>
        </div>
    )
}

export default DynamicPage;