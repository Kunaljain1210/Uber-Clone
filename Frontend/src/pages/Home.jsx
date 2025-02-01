import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className=' bg-cover bg-center bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className='w-20 ml-8' src='https://freelogopng.com/images/all_img/1659768779uber-logo-white.png'/>
        <div className='bg-white py-4 px-5 pb-7'>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link to= '/login'className='flex items-center justify-center w-full bg-black text-white font-semibold py-3 rounded mt-5 text-l'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
