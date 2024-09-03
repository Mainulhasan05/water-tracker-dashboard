// pages/history.js
import { useState, useEffect } from 'react';
import axiosInstance from '../../utils/axiosInstance';

const History = () => {
  const [historyData, setHistoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch history data
    const fetchHistoryData = async () => {
      try {
        // Make an API call to getHistory
        const response = await axiosInstance.get('/api/history');
        setHistoryData(response.data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchHistoryData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Water Log History</h1>
      {historyData && (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              {historyData.headers.map((header, index) => (
                <th key={index} className="text-center">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {historyData.data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {historyData.headers.map((header, colIndex) => (
                  <td key={colIndex} className="text-center">
                    {header == 'Date' ? new Date(row[header]).toDateString() : row[header] || 0}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;
