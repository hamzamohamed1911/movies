import React, { useRef, useState } from 'react';
import Button from '../../_root/components/Button.jsx';
import { IoIosPersonAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useAuth } from '../../store/Auth-context.jsx';

const SignUp = () => {
    const navigate = useNavigate();
    const { signUp, error, setError } = useAuth();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);

            await signUp(
              emailRef.current.value,
              passwordRef.current.value,
              usernameRef.current.value
          );


            navigate('/signin');
        } catch (error) {
            setError(error.message);
        }

        setLoading(false);
    };

    return (
        <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-4xl text-babyblue">Sign Up</h1>

            <motion.div
                className="flex justify-center items-center flex-col mt-8 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="py-6 space-y-4"
                    initial={{ opacity: 0, x: 120 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button icon={<FaGithub size={22} />} normal label="Sign Up with GitHub" />
                    <Button icon={<FaGoogle size={22} />} normal label="Sign Up with Google" />
                </motion.div>

                <motion.div
                    className="mx-auto max-w-xs w-full"
                    initial={{ opacity: 0, x: -120 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && <p className="text-red-500">{error}</p>}
                        <motion.input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text"
                            placeholder="Username"
                            ref={usernameRef}
                            required
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        />
                        <motion.input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email"
                            placeholder="Email"
                            ref={emailRef}
                            required
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        />
                        <motion.input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="password"
                            placeholder="Password"
                            ref={passwordRef}
                            required
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        />
                        <motion.input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="password"
                            placeholder="Confirm Password"
                            ref={confirmPasswordRef}
                            required
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        />

                        <div className="mt-5">
                            <motion.div
                                className="mt-5"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                            >
                                <Button
                                    handleClick={handleSubmit}
                                    icon={<IoIosPersonAdd size={20} />}
                                    label={loading ? "Submitting..." : "Sign Up"}
                                    normal
                                    fullWidth
                                    disabled={loading}
                                />
                            </motion.div>
                        </div>
                    </form>
                    <p className="mt-6 text-xs text-babyblue text-center">
                        By signing up, you agree to our{' '}
                        <a href="#" className="border-b border-gray-500 border-dotted">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="border-b border-gray-500 border-dotted">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SignUp;
