import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

import 'src/styles/index.scss';
import 'gridlex/src/gridlex.scss';

import Layout from 'src/modules/layout/components/Layout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Package.json viewer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
