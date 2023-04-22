import React from "react";

const News = ({ data }) => {
  return (
    <>
      <span>Analytic key is {process.env.NEXT_PUBLIC_ANALYTIC_ID}</span>
      <h1 className="content">{data}</h1>
    </>
  );
};

export default News;

export const getStaticProps = async (context) => {
  return {
    props: {
      data: context.preview
        ? "list of draft articles"
        : "list of published articles",
    },
  };
};
