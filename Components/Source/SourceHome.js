import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import SourceCardItem from "./SourceCardItem";
import { useRouter } from "next/router";

const SourceHome = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18; //
  useEffect(() => {
    console.log(router);

    if (router.query.slug) {
      loadData(router.query.slug);
    }
  }, [router.query]);

  const loadData = async (slug) => {
    const res = await axiosInstance.get(`/source/${slug}`);
    const data = await res.data;
    console.log(data);
    setData(data);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`?page=${page}`, undefined, { shallow: true });
  };

  const totalPages = Math.ceil(data?.total / 18); // Calculate total pages based on total data

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
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default SourceHome;
