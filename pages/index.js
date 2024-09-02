import Homepage from "@/Components/Homepage/Homepage";
import React, { useEffect } from "react";
import axios from "../utils/axiosInstance";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUserInformation } from "@/features/user/userSlice";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const res = await axios.get("/api/waterlogs", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.data;

  
  return {
    props: {
      data,
    },
  };
};

const index = () => {
  return (
    <div>
      <Head>
        <title>Waterlogs</title>
      </Head>
      <Homepage />
    </div>
  );
};

export default index;
