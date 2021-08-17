import React, { useState, useEffect } from "react";
import Head from 'next/head';
import { useRouter } from "next/dist/client/router";
import Layout from '../components/Layout/Layout';
import TakeMeHomeCountryRoads from '../components/TakeMeHomeCountryRoads/TakeMeHomeCountryRoads';
import "../styles/global.scss";
import { AnimateSharedLayout } from "framer-motion"

export default function CustomApp({ Component, pageProps }) {
    const [siteTitle] = useState('Lukortech? More like lukor_teach!');
    const [shouldShowHomepageButton, setShouldShowHomepageButton] = useState(Component.name !== "Home");
    const router = useRouter();

    useEffect(() => {
        setShouldShowHomepageButton(Component.name !== "Home" || Component.name !== "NotFound");
    }, [Component.name])

    useEffect(() => {
        // When we want to have client side redirects : 
        // if(Component.name === "Mainpage") router.replace("/home")
        // if(Component.name === "Mainpage") router.push("/home")
    }, [Component.name])

    console.log(router);

    return (
        <AnimateSharedLayout>
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
                <Component {...pageProps} />
                {shouldShowHomepageButton && <TakeMeHomeCountryRoads />}
            </Layout>
        </AnimateSharedLayout>
    )
}