import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

  const navigate = useNavigate()

  // Initial state of email and password

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    logIn()
  };

  //Login API
    const logIn = async () => {

      const user_data = {
        email: email,
        password: password
      };

      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user_data),
      });
      const response = await res.json();
      // Validate credentails
      if (response.error){
        alert(response.error)
      }
      console.log(response)
      setEmail("")
      setPassword("")
      // Navigate to contacts list page
      response.token && navigate('user/contacts') //: alert("Cannot login!")
    };

  return (
    <div className='login-form'>
      <form className="login" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="email" placeholder='email' value={email} required onChange={(e) => {
            setEmail(e.target.value);
      }}/>
      <input type="password" placeholder='password' value={password} required onChange={(e) => {
            setPassword(e.target.value);
      }}/>
      <input type="submit" value={"Login"} className='btn' />
    </form>
    </div>
  )
}

export default LoginForm