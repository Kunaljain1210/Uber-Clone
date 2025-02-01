import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-22 m-auto mb-8' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg'/>
        <div className='w-36 h-7 rounded m-auto mb-3.5 font-semibold bg-[#d46c3b]'>
          <p className='w-32 flex justify-center'>Login As User</p>
        </div>
        <form onSubmit={(e) => {submitHandler(e)}}>
        <h3 className='text-xl mb-2'>What's Your Email Address</h3>
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

        <h3 className='text-xl mb-2'>Enter Password</h3>
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
        <p className='text-center'>New Here ?</p>
          <Link 
            to= '/signup' 
            className='text-blue-700 cursor-pointer font-semibold '>Create New Account -
          </Link>
       </div>
      </div>
      
      <div>
        <Link 
          to= '/captain-login' 
          className='bg-[#39bb7a] flex items-center justify-center mt-1 mb-7 rounded text-lg px-4 py-2 w-full font-semibold placeholder:text-xm text-white'>Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
