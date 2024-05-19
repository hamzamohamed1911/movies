import React from 'react';
import Button from '../../_root/components/Button.jsx';
import { CiLogin } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignIn = () => {
    const navigate = useNavigate();
    
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
                <motion.div 
                    className="flex justify-center items-center mt-8 w-full"
                    initial={{ opacity: 0, x: 120 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.div 
                        className="mx-auto max-w-xs w-full"
                        initial={{ opacity: 0, x: -120 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <motion.input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="email" placeholder="Email" required
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            />
                            <motion.input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="password" placeholder="Password" required
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}

                            />

         <div className="mt-5"> 
               <motion.div className="mt-5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }} >
                <Button handleClick={handleSubmit} icon={<CiLogin size={20}/>} label="Sign In" normal fullWidth/>
              </motion.div>
        </div>
                        </form>
                        <p className="mt-6 text-s text-babyblue text-center">
                            Don&apos;t have an account?  
                            <Link to="/signup" className="border-b border-gray-500 border-dotted">
                                Sign Up
                            </Link>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default SignIn;
