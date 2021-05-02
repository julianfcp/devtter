import "../styles/globals.css";
import Head from "next/head";
import { AppLayout, Main } from "styles/App-css";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Head>
        <title>Devtter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </AppLayout>
  );
}

export default MyApp;
