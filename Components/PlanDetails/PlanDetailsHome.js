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
      <div className="row">
        {planDetails?.images?.map((image) => (
          // <>{process.env.IMAGE_URL + image}</>
          <img
            key={image}
            src={process.env.IMAGE_URL + image}
            alt={process.env.IMAGE_URL + image}
          />
        ))}
      </div>

      <br />
      <br />

      <a href={planDetails?.href} target="_blank">
        <button className="btn btn-primary">Visit Original</button>
      </a>

      <KeySpecifications planDetails={planDetails} />
      <FullSpecificationsTable planDetails={planDetails} />
      <br />
      <Description planDetails={planDetails} />
    </main>
  );
};

export default PlanDetailsHome;
