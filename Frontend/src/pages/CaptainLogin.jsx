import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState('')

    const submitHandler = (e) => {
      e.preventDefault()
      setCaptainData({
        email: email,
        password: password
      })
      setEmail('')
      setPassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-22 m-auto mb-6' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg'/>
        <div className='w-40 h-7 rounded m-auto mb-3.5 font-semibold bg-green-300'>
          <p className='w-32 m-auto'>Login As Captain</p>
        </div>
        <form onSubmit={(e) => {submitHandler(e)}}>
          <h3 className='text-xl mb-2'>Enter Your Email Address</h3>
          <input 
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm'
            type='email' 
            placeholder='Your Email'
          />

          <h3 className='text-xl mb-2'>Enter Your Password</h3>
          <input 
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm'
            type='password' 
            placeholder='Your Password'
          />

          <button className='bg-black mb-4 rounded text-lg px-4 py-2 w-full font-semibold placeholder:text-xm text-white'>Login</button>
        </form>
        <div className="flex items-center justify-center space-x-1">
          <p className='text-center'>Join our fleet ?</p>
          <Link 
            to= '/captain-signup' 
            className='text-blue-700 cursor-pointer font-semibold '>Register as a Captain-
          </Link>
        </div>
      </div>
      <div>
        {/* sign up as user */}
          <Link 
            to= '/login' 
            className='bg-[#d46c3b] flex items-center justify-center mt-1 mb-7 rounded text-lg px-4 py-2 w-full font-semibold placeholder:text-xm text-white'>Sign in as User
          </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
