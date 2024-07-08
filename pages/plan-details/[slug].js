import React from "react";

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  console.log(slug);
  return {
    props: {
      slug,
    },
  };
};

const index = () => {
  return <div></div>;
};

export default index;
