import React from "react";

const FullSpecificationsTable = ({ planDetails }) => {
  return (
    <div className="container p-2">
      <h3>Full Specifications</h3>
      <table className="table p-3">
        <tbody>
          {planDetails?.full_specifications?.map((specification, index) =>
            Object.entries(specification).map(([key, value]) => (
              <tr key={`${index}-${key}`}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FullSpecificationsTable;
