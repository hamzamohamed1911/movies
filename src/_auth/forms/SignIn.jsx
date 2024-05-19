import React from 'react';
import Button from '../../_root/components/Button.jsx';
import { CiLogin } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/')
  };

  return (
    <>
      <div className="mt-12 flex flex-col items-center">
        <h1 className="text-2xl xl:text-4xl text-babyblue">
          Sign In
        </h1>
        <div className="flex justify-center items-center mt-8 w-full">
          <div className="mx-auto max-w-xs w-full">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email" placeholder="Email" required />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="password" placeholder="Password" required />
              <div className="mt-5">
                <Button handleClick={handleSubmit} icon={<CiLogin size={20}/>} label="Sign In" normal fullWidth/>
              </div>
            </form>
            <p className="mt-6 text-s text-babyblue text-center">
              Don&apos;t have an account?  
              <Link to="/signup" className="border-b border-gray-500 border-dotted">
                 Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
