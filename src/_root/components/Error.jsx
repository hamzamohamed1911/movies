import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { moviesLogo } from '../../assets';
import { motion } from 'framer-motion';

const ErrorPage = () => {
    const error = useRouteError();
    let title = 'An error occured!';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        message = error.data.message;
    }
    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resource or page';
    }

    return (
        <>
            <main className="min-h-screen w-full flex flex-col justify-center items-center bg-slate-900">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex items-center space-x-2 md:space-x-10"
                >
                    <Link to="/" className="flex gap-1 h-24 cursor-pointer">
                        <motion.img
                            src={moviesLogo}
                            className="h-20 object-contain"
                            alt="Movies Logo"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.span
                            className="text-babyblue flex self-center text-3xl font-semibold"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            Movie
                        </motion.span>
                    </Link>
                </motion.div>
                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-9xl font-extrabold text-blue tracking-widest"
                >
                    <motion.span
                        className="inline-block"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        4
                    </motion.span>
                    <motion.span
                        className="inline-block"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                    >
                        0
                    </motion.span>
                    <motion.span
                        className="inline-block"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.9 }}
                    >
                        4
                    </motion.span>
                </motion.h1>
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="text-6xl font-extrabold text-babyblue tracking-widest py-8 md:py-12 text-center"
                >
                    {title}
                </motion.h1>
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="text-6xl font-extrabold text-babyblue tracking-widest text-center"
                >
                    {message}
                </motion.h1>
            </main>
        </>
    );
};

export default ErrorPage;
