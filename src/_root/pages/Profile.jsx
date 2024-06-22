import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useAuth } from '../../store/Auth-context.jsx';
import { updateProfile } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firestore } from '../../firebase/config';
import Button from '../components/Button.jsx';
import { useComponentContext } from '../../store/componentContext.jsx';
import { Link } from 'react-router-dom';
import { MdOutlineBookmarkRemove } from 'react-icons/md';
import { motion } from 'framer-motion';

const Profile = () => {
    const { authUser, setAuthUser } = useAuth();
    const [username, setUsername] = useState(authUser?.displayName || '');
    const [profilePic, setProfilePic] = useState(authUser?.photoURL || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const { watchlist, removeFromWatchlist } = useComponentContext();
    const [isWatchlistVisible, setIsWatchlistVisible] = useState(false);

    useEffect(() => {
        if (authUser) {
            const fetchUserData = async () => {
                const userDoc = doc(firestore, 'users', authUser.uid);
                const docSnap = await getDoc(userDoc);

                if (docSnap.exists()) {
                    setUsername(docSnap.data().username || '');
                    setProfilePic(docSnap.data().profilePic || '');
                }
            };
            fetchUserData();
        }
    }, [authUser]);

    const handleUsernameChange = useCallback((e) => {
        setUsername(e.target.value);
    }, []);

    const handleProfilePicChange = useCallback((e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            setSelectedImage(file);
            reader.onload = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }, []);

    const handleSave = useCallback(async () => {
        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            if (authUser) {
                let photoURL = profilePic;

                if (selectedImage) {
                    const storage = getStorage();
                    const storageRef = ref(storage, `profile_pictures/${authUser.uid}/profile.jpg`);
                    await uploadBytes(storageRef, selectedImage);
                    photoURL = await getDownloadURL(storageRef);
                }

                await updateProfile(authUser, {
                    displayName: username,
                    photoURL: photoURL,
                });

                const userDoc = doc(firestore, 'users', authUser.uid);
                await updateDoc(userDoc, {
                    username: username,
                    profilePic: photoURL,
                });

                setAuthUser({
                    ...authUser,
                    displayName: username,
                    photoURL: photoURL,
                });

                setSuccessMessage('Profile updated successfully');
            }
        } catch (err) {
            setError(err.message);
        }

        setLoading(false);
    }, [authUser, username, profilePic, selectedImage, setAuthUser]);

    const memoizedProfilePic = useMemo(() => {
        return selectedImage ? URL.createObjectURL(selectedImage) : profilePic || '../../../public/profile.jpg';
    }, [selectedImage, profilePic]);

    return (
        <div className="flex flex-col items-center mt-12">
            <h1 className="text-2xl xl:text-5xl text-babyblue">Profile</h1>

            <div className="mt-8 w-full max-w-md">
                <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                        <label className="cursor-pointer">
                            <img
                                src={memoizedProfilePic}
                                alt="Profile"
                                className="w-32 h-32 object-cover rounded-full"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePicChange}
                                style={{ display: "none" }}
                            />
                        </label>
                    </div>

                    <input
                        type="text"
                        className="w-full px-5 py-4 rounded-lg border border-gray-300"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <input
                        type="email"
                        className="w-full px-5 py-4 p-10 rounded-lg bg-navy text-babyblue "
                        value={authUser.email}
                        disabled
                    />

                    <Button
                        handleClick={handleSave}
                        small
                        disable={loading}
                        label={loading ? 'Saving...' : 'Edit'}
                    />

                    {error && <p className="text-red-500 mt-4">{error}</p>}
                    {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                </div>
            </div>
            <h2 className="lg:text-4xl text-2xl text-babyblue my-4">My Watchlist</h2>

            <Button
                handleClick={() => setIsWatchlistVisible(!isWatchlistVisible)}
                label={isWatchlistVisible ? 'Hide Watchlist' : 'Show Watchlist'}
                fullWidth
                normal
            />

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isWatchlistVisible ? 'auto' : 0, opacity: isWatchlistVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl bg-navy p-6 rounded-lg shadow-md overflow-hidden"
            >
                <div className="space-y-4">
                    {watchlist.length > 0 ? (
                        watchlist.map((movie, index) => (
                            <div key={movie.id} className="flex items-center space-x-4 p-4">
                                <Link to={`/movie/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="w-20 h-28 rounded-md shadow-md" />
                                </Link>
                                <div className="flex flex-col space-y-2 flex-1">
                                    <h1 className="text-xl font-semibold text-white">{movie.title || movie.name}</h1>
                                    <p className="text-sm text-gray-400">{movie.overview}</p>
                                </div>
                                <button onClick={() => removeFromWatchlist(movie.id)} className="focus:outline-none">
                                    <MdOutlineBookmarkRemove size={24} className="text-gray-400 hover:text-white" />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="p-4 text-gray-400 text-center">Watchlist is empty</div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Profile;
