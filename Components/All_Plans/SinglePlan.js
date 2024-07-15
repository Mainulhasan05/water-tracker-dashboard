import React, { useState } from "react";

const SinglePlan = ({ data }) => {
  const [selectedPlans, setSelectedPlans] = useState([]);

  const handleCheckboxChange = (modelNum) => {
    setSelectedPlans((prevSelectedPlans) => {
      if (prevSelectedPlans.includes(modelNum)) {
        return prevSelectedPlans.filter((num) => num !== modelNum);
      } else {
        return [...prevSelectedPlans, modelNum];
      }
    });
  };

  const handleDelete = () => {
    console.log("Selected model numbers:", selectedPlans);
  };

  return (
    <div className="container mt-5">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <a href={data.href} target="_blank" className="card-link">
            View Plan
          </a>
          <div className="mt-3">
            {data?.images?.length > 0 && (
              <img
                src={process.env.IMAGE_URL + data.images[0]}
                alt="Parent Plan"
                className="img-thumbnail mr-2"
                style={{ maxWidth: "400px" }}
              />
            )}
          </div>
        </div>
      </div>

      <h5>Similar Plans</h5>
      {data.similar_with.map((similar) => (
        <div className="card mb-3" key={similar._id}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`checkbox-${similar._id}`}
                  onChange={() => handleCheckboxChange(similar.model_num)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`checkbox-${similar._id}`}
                >
                  {similar.title}
                </label>
              </div>
              <button className="btn btn-danger mt-3" onClick={handleDelete}>
                Delete Selected
              </button>
            </div>

            <a href={similar.href} target="_blank" className="card-link">
              Visit Orginal
            </a>
            <div className="mt-3">
              {similar?.images?.length > 0 && (
                <img
                  src={process.env.IMAGE_URL + similar.images[0]}
                  alt="Similar Plan"
                  className="img-thumbnail mr-2"
                  style={{ maxWidth: "200px" }}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SinglePlan;
