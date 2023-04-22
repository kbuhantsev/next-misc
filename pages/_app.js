import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/layout.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="description of home page" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
