import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

import Layout from '../modules/layout/components/Layout';

import 'src/styles/index.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Online shop</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
