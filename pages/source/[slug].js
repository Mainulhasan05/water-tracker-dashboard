import SourceHome from "@/Components/Source/SourceHome";
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
const index = ({ data }) => {
  return (
    <div>
      <SourceHome data={data} />
    </div>
  );
};

export default index;
