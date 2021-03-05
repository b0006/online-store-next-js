import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import { setConfiguration } from 'react-grid-system';

import Layout from '../modules/layout/components/Layout';

import 'src/styles/index.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  setConfiguration({
    maxScreenClass: 'xxl',
    // xs, xm, sm, md, lg, xl, xxl
    breakpoints: [375, 540, 768, 1024, 1280, 1440],
    containerWidths: [525, 740, 960, 1140, 1265, 1280],
    gridColumns: 12,
  });

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
