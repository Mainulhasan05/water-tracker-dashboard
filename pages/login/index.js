import Login from '@/Components/Auth/Login'
import Link from 'next/link'
import React from 'react'

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  

  
};

const index = () => {
  return (
    <div>
    <Login/>
    </div>
  )
}

export default index
