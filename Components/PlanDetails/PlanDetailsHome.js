import React from "react";
import CustomeImage from "../UI/CustomeImage";

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
    </main>
  );
};

export default PlanDetailsHome;
