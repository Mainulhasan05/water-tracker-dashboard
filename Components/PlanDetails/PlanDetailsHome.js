import React from "react";
import CustomeImage from "../UI/CustomeImage";
import FullSpecificationsTable from "./FullSpecificationsTable";
import KeySpecifications from "./KeySpecifications";
import Description from "./Description";

const PlanDetailsHome = ({ planDetails }) => {
  return (
    <main id="main" className="main">
      <h2>{planDetails?.title}</h2>
      <b>Images: {planDetails?.images?.length}</b>

      <br />
      <br />

      <KeySpecifications planDetails={planDetails} />
      <FullSpecificationsTable planDetails={planDetails} />
      <br />
      <Description planDetails={planDetails} />
    </main>
  );
};

export default PlanDetailsHome;
