import Footer from "@/components/Footer";
import Head from "next/head";
import React from "react";

const About = () => {
  return <div className="content">About</div>;
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="description of about page" />
      </Head>
      {page}
      <Footer />
    </>
  );
};
