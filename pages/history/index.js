// pages/history.js
import { useState, useEffect } from 'react';
import axiosInstance from '../../utils/axiosInstance';

const History = () => {
  // Get the current date
  const today = new Date();
  // Calculate the first day of the current month
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
  // Calculate the last day of the current month
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split('T')[0];

  // Initialize state with the current month's date range
  const [startDate, setStartDate] = useState(firstDayOfMonth);
  const [endDate, setEndDate] = useState(lastDayOfMonth);
  const [historyData, setHistoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistoryData = async () => {
      setLoading(true);
      try {
        // Make an API call to get history data with the date range
        const response = await axiosInstance.get(`/api/history?startDate=${startDate}&endDate=${endDate}`);
        setHistoryData(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchHistoryData();
  }, [startDate, endDate]); // Fetch data when startDate or endDate changes

  if (loading) return <div className='text-center'><br/><br/><br/><br/><div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-5">
      <br/><br/>
      <h1 className="mb-4">Water Log History</h1>
      
      {/* Date Range Selector */}
      <div className="mb-4">
        <label htmlFor="startDate" className="mr-2">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mr-4 "
        />
        <label htmlFor="endDate" className="mr-2 mx-4">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          
        />
      </div>

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
                    {header === 'Date' ? new Date(row[header]).toDateString() : row[header] || 0}
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
