import React from "react";
import axiosInstance from "../../utils/axiosInstance";
import PlanDetailsHome from "@/Components/PlanDetails/PlanDetailsHome";
export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  const res = await axiosInstance.get(`/plan-details/${slug}`);
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  console.log(data);
  return (
    <>
      <PlanDetailsHome planDetails={data} />
    </>
  );
};

export default index;
