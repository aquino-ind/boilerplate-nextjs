import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Titulo top</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <meta name="description" content="Nossa descrição top aqui" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default App;
