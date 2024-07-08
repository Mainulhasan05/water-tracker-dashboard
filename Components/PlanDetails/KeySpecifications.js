import React from "react";

const KeySpecifications = ({ planDetails }) => {
  return (
    <div className="container">
      <h3>Key Specifications</h3>
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            {planDetails?.key_specifications?.map((item) => {
              return (
                <div className="w-50">
                  <p className="my-4">
                    <strong>{item}</strong>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeySpecifications;
