import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <div dangerouslySetInnerHTML={{ __html: '<!-- Website created by Luke (luke@glitch.je) -->' }} />

                <meta charSet="utf-8" />

                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="author" content="Luke <luke@glitch.je>" />
                <meta name="description" content="The Mary Rose is a Pub/Bar/Nightclub in Jersey, Channel Islands. Watch live sports, sing karoke or enjoy live DJs." />
                <meta name="keywords" content="portfolio" />
                <meta name="robots" content="index,follow" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />

                <title>The Mary Rose</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
