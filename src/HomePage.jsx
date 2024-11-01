import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [data,setdata] = useState(null)
    console.log(data)
    const res = async ()=>{
        await axios.get('http://127.0.0.1:8000')
        .then(res => setdata(res.data.message))
    }
    useEffect(()=>{
       res()
    },[])
  return (
    <div className='homepage'>
        <h2>Welcome to </h2>
        <h1>{data}</h1>
        <Link to={'/predict'} className='start'>
            START
        </Link>
    </div>
  )
}

export default HomePage