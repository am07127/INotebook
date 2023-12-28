import React, {useState} from 'react'

import { useNavigate } from 'react-router';

const Login = () => {

  const [credentials, setCredentials] = useState({email: "", password: ""})

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({Email: credentials.email, Password: credentials.password}) 
    });

    const json = await response.json()

    console.log(json);

    if (json.success){
      // Save the auth token and redirect 
      localStorage.setItem('token', json.authtoken);
      alert("Login was successful!")
      navigate("/dashboard");
    }
    else{
      alert("Invalid Email or Password!")
    }
  }

  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div className="mx-auto max-w-md py-8">
      <h1 className="text-3xl font-bold text-center mb-5 my-6">Manage your Website with ease using our Admin Portal!</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email address</label>
          <input type="email" className="w-full border border-gray-400 p-2" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>

          <p className="text-gray-500 text-sm mt-1">We'll never share your email with anyone else.</p>
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" className="w-full border border-gray-400 p-2" value={credentials.password} onChange={onChange} name="password" id="password"/>
        </div>

        <div className="flex justify-center mb-6">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login