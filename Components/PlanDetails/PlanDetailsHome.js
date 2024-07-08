import React from "react";
import CustomeImage from "../UI/CustomeImage";
import FullSpecificationsTable from "./FullSpecificationsTable";
import KeySpecifications from "./KeySpecifications";

const PlanDetailsHome = ({ planDetails }) => {
  console.log(planDetails);
  return (
    <main id="main" className="main">
      {planDetails?.title}sadsad
      {planDetails?.images?.length > 0 && (
        <img
          src={process.env.IMAGE_URL + planDetails?.images[0]}
          alt={planDetails?.title}
        />
      )}
      <br />
      <br />
      <KeySpecifications planDetails={planDetails} />
      <FullSpecificationsTable planDetails={planDetails} />
    </main>
  );
};

export default PlanDetailsHome;
