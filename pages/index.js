import Homepage from "@/Components/Homepage/Homepage";
import React, { useEffect } from "react";
import axios from "../utils/axiosInstance";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUserInformation } from "@/features/user/userSlice";

// export const getServerSideProps = async (context) => {
//   const token = context.req.cookies.mess_token;

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }
//   const res = await axios.get("/api/home", {
//     headers: {
//       Authorization: `${token}`,
//     },
//   });
//   const data = await res.data;

//   if (res.status != 200) {

//     Cookies.remove("mess_token");
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       data,
//     },
//   };
// };

const index = () => {
  return (
    <div>
      <Homepage />
    </div>
  );
};

export default index;
