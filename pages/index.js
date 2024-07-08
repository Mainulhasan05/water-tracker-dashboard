import Homepage from '@/Components/Homepage/Homepage'
import React, { useEffect } from 'react'
import axios from '../utils/axios'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { setUserInformation } from '@/features/user/userSlice'

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.mess_token
  
  if(!token){
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  const res = await axios.get('/api/home', {
    headers: {
      Authorization: `${token}`,
    },
  })
  const data = await res.data
  
  if(res.status!=200){
    // clear the cookie
    Cookies.remove('mess_token')
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  
  return {
    props: {
      data,
    },
  }
}

const index = ({data}) => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(setUserInformation(data.data.user))
    console.log(data.data.mess_id)
  }
  , [])
  return (
    <div>
      {
        data?.data?.mess_id == null ? 
        <main id="main" className="main">
          <div className="alert alert-danger text-center" role="alert">
          <h1>You are not assigned to any mess.</h1>
        </div>
        </main> : <Homepage/>
      }
      
    </div>
  )
}

export default index
