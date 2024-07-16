import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
const SinglePlan = ({ data, fetchData }) => {
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

  const handleDelete = async () => {
    // /delete-plans post request to delete selected plans
    try {
      const res = await axiosInstance.post("/delete-plans", {
        model_nums: selectedPlans,
      });
      if (res.status === 200) {
        fetchData();
        setSelectedPlans([]);
      }
    } catch (error) {
      console.error("Error deleting plans:", error);
    }
  };
  const uploadSelected = async () => {
    // /upload-plans post request to upload selected plans
    try {
      const res = await axiosInstance.post("/upload-plans", {
        model_nums: selectedPlans,
      });
      if (res.status === 200) {
        fetchData();
        setSelectedPlans([]);
      }
    } catch (error) {
      console.error("Error uploading plans:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id={`checkbox-${data._id}`}
                onChange={() => handleCheckboxChange(data.model_num)}
              />
              <label
                className="form-check-label"
                htmlFor={`checkbox-${data._id}`}
              >
                <span className="card-title fs-5">{data.title}</span>
              </label>
              {/* create two buttons to upload selected , delete selected */}
              <button
                className="btn btn-primary mt-3 mx-2"
                onClick={uploadSelected}
              >
                Upload Selected
              </button>
              <button className="btn btn-danger mt-3" onClick={handleDelete}>
                Delete Selected
              </button>
            </div>
          </div>

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
                  {similar.title}{" "}
                  <span className="badge bg-success">
                    {similar?.model_num} - {similar?.source}
                  </span>
                </label>
              </div>
              <button
                className="btn btn-primary mt-3 mx-2"
                onClick={uploadSelected}
              >
                Upload Selected
              </button>

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
