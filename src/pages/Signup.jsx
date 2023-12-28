import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [rememberlogin, setRememberlogin] = useState(true);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

//setting up the firebase for the project
  const {user,signUp}= UserAuth();
  const navigate =useNavigate();


  const handleFormSumit=async (e)=>{
e.preventDefault();
console.log(email);
console.log(password);

try{
  await signUp(email,password);
  navigate('/');
} catch(err){
  console.log(err)
}
  };

  return (
    <div className="w-full h-screen relative">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="bg-black absolute top-0 left-0 w-full h-full opacity-70" />

      <div className="fixed w-full px-4  py-24 z-20">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg opacity-80">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-nsans-bold z-40">Sign up</h1>
            <form onSubmit={handleFormSumit} className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="email"
                autoComplete="current-email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">
                Sign Up
              </button>

              <div className="flex justify-between items-center text-gray-600">
                <p>
                  <input type="checkbox" className="mr-2 " checked={rememberlogin} onchange={(e)=>setRememberlogin(!rememberlogin)} />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="my-4">
                <span className="text-gray-600 mr-2">
                  Already Subscribed to Netflix
                  <Link to="/login">Sign In</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
