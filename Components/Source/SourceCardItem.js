import Image from "next/image";
import Link from "next/link";
import React from "react";

const SourceCardItem = ({ item }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <Link href={`/plan-details/${item?.model_num}`}>
        {item?.images?.length > 0 && (
          <img
            src={process.env.IMAGE_URL + item.images[0]}
            alt="Parent Plan"
            className="img-thumbnail mr-2"
            width={400}
            height={250}
          />
        )}
        {/* <img
          src="https://cdn.houseplansservices.com/product/1kio6f6h0se9qhsvqdsv7aht3o/w800x533.jpg?v=8"
          className="card-img-top"
          alt="Home Plan Image"
          width={300}
          height={250}
        /> */}
      </Link>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Link href={`/plan-details/${item?.model_num}`}>
            <h5 className="card-title">Plan {item?.model_num}</h5>
          </Link>
          {/* <span className="text-primary">from $1395.00</span> */}
        </div>
        <div className="row text-center">
          {item?.key_specifications?.map((item) => {
            const value = item.split(" ")[0];
            const key = item.split(" ")[1];
            return (
              <div className="col-4 mb-1">
                <h6 className="mb-1">{value}</h6>
                <small className="text-muted">{key}</small>
              </div>
            );
          })}
          {/* {item?.key_specifications?.(item).map((item) => {
            return (
              <div className="col-4">
                <h6 className="mb-1">{item}</h6>
                <small className="text-muted">bed</small>
              </div>
            );
          })} */}
          {/* <div className="col-4">
            <h6 className="mb-1">4</h6>
            <small className="text-muted">bed</small>
          </div>
          <div className="col-4">
            <h6 className="mb-1">3</h6>
            <small className="text-muted">bath</small>
          </div> */}
        </div>
        {/* <div className="row text-center mt-2">
          <div className="col-4">
            <h6 className="mb-1">2</h6>
            <small className="text-muted">story</small>
          </div>
          <div className="col-4">
            <h6 className="mb-1">84'</h6>
            <small className="text-muted">wide</small>
          </div>
          <div className="col-4">
            <h6 className="mb-1">50'</h6>
            <small className="text-muted">deep</small>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SourceCardItem;
