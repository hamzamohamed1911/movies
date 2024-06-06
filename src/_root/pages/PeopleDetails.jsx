import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useApi } from '../../store/ApiContext';
import { useParams } from 'react-router-dom';
import MoviesAndTVShows from '../components/MoviesAndTVShows';

const PeopleDetails = () => {
    const { person, fetchPerson } = useApi();
    const { personId } = useParams();
    const [showFullDescription, setShowFullDescription] = useState(false);

    const genderMap = {
        0: 'Not set / not specified',
        1: 'Female',
        2: 'Male',
        3: 'Non-binary'
    };
    
    useEffect(() => {
        if (personId) {
            fetchPerson({ id: personId });
        }
    }, [personId, fetchPerson]);

    const toggleDescription = useCallback(() => {
        setShowFullDescription((prev) => !prev);
    }, []);

   

    return (
       <div className=' h-full p-4 sm:p-6 lg:p-20 bg-gradient-to-b from-transparent to-slate-950'>
         <div className=' flex justify-center items-center  '>
            <motion.div 
                className="flex flex-col lg:flex-row rounded-lg shadow-lg p-4 lg:p-10 w-full py-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div 
                    className="lg:w-1/3 mb-6 lg:mb-0"
                    whileHover={{ scale: 1.05 }}
                >
                    <img 
                        className="lg:w-[450px] lg:h-[550px] h-[500px] w-[400px] rounded-3xl object-cover "
                        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} 
                        alt={person.name} 
                    />
                </motion.div>
                <div className="lg:w-2/3 lg:pl-10">
                    <h1 className="text-blue lg:text-5xl text-4xl font-bold mb-4">
                        {person.name}
                    </h1>
                    <p className="lg:text-2xl text-lg font-light text-babyblue py-5">
                        <strong className='mb-2 text-blue lg:text-3xl text-xl mr-2'>Known For:</strong> {person.known_for_department}
                    </p>
                    <p className="lg:text-2xl text-lg font-light text-babyblue py-5">
                        <strong className='mb-2 text-blue lg:text-3xl text-xl mr-2'>Birthday:</strong> {person.birthday ? new Date(person.birthday).toLocaleDateString() : 'N/A'}
                    </p>
                    <p className="lg:text-2xl text-lg font-light text-babyblue py-5">
                        <strong className='mb-2 text-blue lg:text-3xl text-xl mr-2'>Place of Birth:</strong> {person.place_of_birth || 'N/A'}
                    </p>
                    <p className="lg:text-2xl text-lg font-light text-babyblue py-5">
                        <strong className='mb-2 text-blue lg:text-3xl text-xl mr-2'>Gender:</strong> {genderMap[person.gender] || 'Not set / not specified'}
                    </p>
                    <p className="lg:text-2xl text-lg font-light text-babyblue py-5">
                        <strong className="mb-2 text-blue lg:text-3xl text-xl mr-2">Biography:</strong>
                        {person.biography ? (
                            <>
                                {showFullDescription ? (
                                    person.biography
                                ) : (
                                    <>
                                        {person.biography.slice(0, 200)}
                                        {person.biography.length > 200 && '...'}
                                    </>
                                )}
                                {person.biography.length > 200 && (
                                    <button className="text-blue font-bold" onClick={toggleDescription}>
                                        {showFullDescription ? ' Less' : ' More'}
                                    </button>
                                )}
                            </>
                        ) : (
                            <span>No description available.</span>
                        )}
                    </p>
                    <p className="lg:text-2xl text-lg font-light text-babyblue mb-2 py-5">
                        <strong className="mb-2 text-blue lg:text-3xl text-lg mr-2">Also Known As:</strong> {person.also_known_as?.join(', ') || 'N/A'}
                    </p>
                    <motion.a 
                        href={`https://www.imdb.com/name/${person.imdb_id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-5 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
                        whileHover={{ scale: 1.1 }}
                    >
                        View on IMDb
                    </motion.a>
                </div>
            </motion.div>
        </div>
        <MoviesAndTVShows personId={personId}/>
       </div>
    );
};

export default PeopleDetails;
