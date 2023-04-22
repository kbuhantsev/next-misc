import React from "react";

const News = ({ data }) => {
  return <h1 className="content">{data}</h1>;
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
