import React from 'react'
import RegisterForm from '../components/Login/RegisterForm' 
import LoginForm from '../components/Login/LoginForm' 

const Login = () => {
  return (
    <div className='login-container'>
    <RegisterForm />
    <LoginForm />
    </div>
  )
}

export default Login