import React from "react";
import axiosInstance from "../../utils/axiosInstance";
import SourceCardItem from "./SourceCardItem";

const SourceHome = ({ data }) => {
  return (
    <main id="main">
      <h2>Working on it {data?.data?.length}</h2>
      <div className="row">
        {data?.data?.map((item) => (
          <div className="col-md-3">
            <SourceCardItem key={item._id} item={item} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default SourceHome;
