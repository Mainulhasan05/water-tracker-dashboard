import React from "react";
import axiosInstance from "../../utils/axiosInstance";

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  const res = await axiosInstance.get(`/source/${slug}`);
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
};

const SourceHome = () => {
  return (
    <main id="main">
      <h2>Working on it</h2>
    </main>
  );
};

export default SourceHome;
