import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosInstance from "../../utils/axiosInstance";
import SinglePlan from "@/Components/All_Plans/SinglePlan";

const Index = () => {
  const router = useRouter();
  const { search = "", page = 1, limit = 1 } = router.query;
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState(search);
  const [currentPage, setCurrentPage] = useState(Number(page));
  const [pageLimit, setPageLimit] = useState(Number(limit));
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // use useEffect to get if there is any query in the url
  useEffect(() => {
    setSearchText(search);
    setCurrentPage(Number(page));
    setPageLimit(Number(limit));
  }, [search, page, limit]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/all-plan", {
        params: {
          search: searchText,
          page: currentPage,
          limit: pageLimit,
        },
      });
      setData(res.data?.data);
      setTotalPages(res.data?.totalPages || 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchText, currentPage, pageLimit]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
    router.push({
      pathname: router.pathname,
      query: { search: e.target.value, page: 1, limit: pageLimit },
    });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    router.push({
      pathname: router.pathname,
      query: { search: searchText, page: newPage, limit: pageLimit },
    });
  };

  const handleLimitChange = (e) => {
    setPageLimit(Number(e.target.value));
    setCurrentPage(1);
    router.push({
      pathname: router.pathname,
      query: { search: searchText, page: 1, limit: e.target.value },
    });
  };

  return (
    <main id="main">
      <div className="container mt-4">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {currentPage > 3 && (
              <>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(1)}
                  >
                    1
                  </button>
                </li>
                {currentPage > 4 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}
              </>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((num) => num >= currentPage - 2 && num <= currentPage + 2)
              .map((num) => (
                <li
                  key={num}
                  className={`page-item ${num === currentPage ? "active" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(num)}
                  >
                    {num}
                  </button>
                </li>
              ))}
            {currentPage < totalPages - 2 && (
              <>
                {currentPage < totalPages - 3 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(totalPages)}
                  >
                    {totalPages}
                  </button>
                </li>
              </>
            )}
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
        {/* navigation on top */}
        <div className="row mb-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
          <div className="col-md-3">
            <select
              className="form-select"
              value={pageLimit}
              onChange={handleLimitChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
        {loading && (
          <div className="text-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div className="row">
          {data?.map((item, index) => (
            <div className="col-md-12" key={index}>
              <SinglePlan fetchData={fetchData} data={item} />
            </div>
          ))}
        </div>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {currentPage > 3 && (
              <>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(1)}
                  >
                    1
                  </button>
                </li>
                {currentPage > 4 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}
              </>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((num) => num >= currentPage - 2 && num <= currentPage + 2)
              .map((num) => (
                <li
                  key={num}
                  className={`page-item ${num === currentPage ? "active" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(num)}
                  >
                    {num}
                  </button>
                </li>
              ))}
            {currentPage < totalPages - 2 && (
              <>
                {currentPage < totalPages - 3 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(totalPages)}
                  >
                    {totalPages}
                  </button>
                </li>
              </>
            )}
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Index;
