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
                <meta name="description" content="A late night venue in Jersey, Channel Islands. Watch live sports, sing karoke or enjoy live DJs." />
                <meta name="keywords" content="Mary Rose Jersey, St Helier bar, Jersey nightlife, karaoke Jersey, live sports bar Jersey, DJs Jersey, cocktails Jersey, late night bar Jersey, Mulcaster Street bar, drum and bass Jersey, DNB Jersey, Jersey pub, live music Jersey" />
                <meta name="robots" content="index,follow" />

                <meta property="og:title" content="The Mary Rose Jersey" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="A late night venue in Jersey, Channel Islands. Watch live sports, sing karoke or enjoy live DJs." />
                <meta property="og:url" content="https://themaryrose.je" />
                <meta property="og:site_name" content="The Mary Rose Jersey" />
                {/*<!-- TODO: Social preview -->*/}

                <link rel="canonical" href="https://themaryrose.je" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                
                <title>The Mary Rose</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
