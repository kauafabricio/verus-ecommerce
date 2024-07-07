import '../src/app/global.css'
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/imgs/verus-logo-black.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;