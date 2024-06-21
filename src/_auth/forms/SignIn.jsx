import React, { useState } from 'react';
import Button from '../../_root/components/Button.jsx';
import { IoLogInOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { Auth } from '../../firebase/config'; 
import Cookies from 'js-cookie';
import { useComponentContext } from '../../store/componentContext.jsx';

const SignIn = () => {
    const navigate = useNavigate();
    const { showNotification } = useComponentContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            setLoading(true);
            setError(null);
            const userCredential = await signInWithEmailAndPassword(Auth, email, password);
            const user = userCredential.user;
            Cookies.set('uid', user.uid, { expires: 7 }); 

            showNotification(`Welcome back, ${user.displayName || 'User'}!`);
            navigate('/');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
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
                        {error && <p className="text-red-500">{error}</p>}
                        <motion.input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email" placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            autoComplete="email"
                            required
                        />
                        <motion.input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="password" placeholder="Password" 
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            autoComplete="current-password"
                            
                        />
                        <div className="mt-5">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                <Button handleClick={handleSubmit} icon={<IoLogInOutline size={20}/>} label={loading? 'Logging in...' : 'Login'} normal fullWidth disabled={loading} />
                            </motion.div>
                        </div>
                    </form>
                    <p className="mt-6 text-xs text-babyblue text-center">
                        Don't have an account?  
                        <Link to="/signup" className="border-b border-gray-500 border-dotted">
                            Sign Up
                        </Link>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SignIn;
