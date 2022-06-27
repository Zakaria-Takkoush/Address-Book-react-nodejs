import React from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {

  // const navigate = useNavigate()

  // Initial state of email and password

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    // Call register function 
    register()
  };

  //Register API (post to database)
    const register = async () => {

      // create user data object to pass to backend
      const user_data = {
        name: name,
        email: email,
        password: password
      };

      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user_data),
      });
      const response = await res.json();
      // console.log(response)
      // Validate successful account creation
      if (response.message === "User added successfully") {
        alert("Account Created!\nYou can log in with your account")
      } else {
        alert('Unable to create account!')
      }
      // Set all fields to blank
      setName("")
      setEmail("")
      setPassword("")
    };

  return (
    <div className='register-form'>
      <form className="register" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input type="text" placeholder='Enter your name...' value={name} required onChange={(e) => {
            setName(e.target.value);
      }}/>
      <input type="email" placeholder='Enter your email...' value={email} required onChange={(e) => {
            setEmail(e.target.value);
      }}/>
      <input type="password" placeholder='Enter your password...' value={password} required onChange={(e) => {
            setPassword(e.target.value);
      }}/>
      <input type="submit" value={"Create Account"} className='btn' />
    </form>
    </div>
  )
}

export default RegisterForm