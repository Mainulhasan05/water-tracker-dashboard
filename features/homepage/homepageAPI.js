import axios from "../../utils/axiosInstance";

// const loadData = async () => {
//   const res = await axiosInstance.get("/data");
//   setData(res.data);
// };

export const loadHomeData = async () => {
  const res = await axios.get("/data");
  return res.data;
};
