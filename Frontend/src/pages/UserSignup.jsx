import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    }
    setUserData(newUser)
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  useEffect(() => {
    console.log(userData);
  }, [userData])
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-22 m-auto mb-6' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg'/>
          <form onSubmit={(e) => {submitHandler(e)}}>

          <h3 className='text-lg mb-2 font-medium'>Enter Your Name</h3>
            <div className='flex gap-3 mb-7'>
              <input 
                  required
                  className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-xm'
                  type='text' 
                  placeholder='First Name'
                  value = {firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
              />
              <input 
                required
                className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-base placeholder:text-xm'
                type='text' 
                placeholder='Last Name'
                value = {lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

            <h3 className='text-base mb-2'>Enter Email Address</h3>
            <input 
              required
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-xm'
              type='email' 
              placeholder='xyz@example.com'
              value = {email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
    
            <h3 className='text-base mb-2'>Enter Password</h3>
            <input 
              required
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-xm'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
    
            <button className='bg-black mb-4 rounded text-lg px-4 py-2 w-full font-semibold placeholder:text-xm text-white'>Login</button>
          </form>
          <div className="flex items-center justify-center space-x-1">
              <p className='text-center'>Already have an account ?</p>
              <Link 
                to= '/login' 
                className='text-blue-700 cursor-pointer font-semibold '>Login Here
              </Link>
          </div>
        </div>
        <div>
          <p className='text-[12px]'>
          By proceeding, you consent to get calls, WhatsApp or SMS
          messages, including by automated means, from Uber and
          its affiliates to the number provided.
          </p>
        </div>
    </div>
    </div>
  )
}

export default UserSignup
