import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/styles/base.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap" />
      </Head>
      <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/fbadad80a0.js" />
    </>
  );
}

export default MyApp;
