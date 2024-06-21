import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Notification = ({ message, onClose }) => {
    useEffect(() => {
         setTimeout(onClose, 2000);
    }, [onClose]);

    return (
        <motion.div
        className="fixed top-24 lg:right-4 right-2 text-lg  bg-blue text-white py-2 px-4 rounded-lg shadow-lg z-50"
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
            {message}
        </motion.div>
    );
};

export default Notification;
