import "../styles/global.scss";

import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { useRouter } from 'next/router';

const name = 'Lukortech'
export const siteTitle = 'Next.js Sample Website'

const NotFound = () => <div>Not found, sorry!</div>

export default function CustomApp({ Component, pageProps }) {
    const router = useRouter();
    // What's the output when we go to http://localhost:3000/about
    console.log(router.route);
    // What's the output when we go to http://localhost:3000/About

    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
                />
                <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            
            {/* What's rendered under /About and /about? */}
            {/* {Component.name === "Home" ? <Component {...pageProps} /> : <NotFound />} */}
            <Component {...pageProps} />
            {/* What's rendered under `/` (custom home folder) */}
        </Layout>
    )
}