import React from "react";

const Description = ({ planDetails }) => {
  return (
    <div className="container">
      <h3>Description</h3>
      <div className="card">
        <div className="card-body p-3">
          <div className="d-flex">{planDetails?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Description;
