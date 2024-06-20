import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../store/Auth-context.jsx';
import { updateProfile } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firestore } from '../../firebase/config';
import Button from '../components/Button.jsx';

const Profile = () => {
    const { authUser, setAuthUser } = useAuth();
    const [userData, setUserData] = useState(null);
    const [username, setUsername] = useState(authUser?.displayName || '');
    const [profilePic, setProfilePic] = useState(authUser?.photoURL || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (authUser) {
            const fetchUserData = async () => {
                const userDoc = doc(firestore, 'users', authUser.uid);
                const docSnap = await getDoc(userDoc);

                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                    setUsername(docSnap.data().username || '');
                    setProfilePic(docSnap.data().profilePic || '');
                }
            };
            fetchUserData();
        }
    }, [authUser]);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            setSelectedImage(file);
            reader.onload = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
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
    };

    return (
        <div className="flex flex-col items-center mt-12">
            <h1 className="text-2xl xl:text-5xl text-babyblue">Profile</h1>

            <div className="mt-8 w-full max-w-md">
                <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                        <label className="cursor-pointer">
                            <img
                                src={selectedImage ? URL.createObjectURL(selectedImage) : profilePic || '../../../public/profile.jpg'}
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
                        className="w-full px-5 py-4 rounded-lg bg-navy text-babyblue "
                        value={authUser.email}
                        disabled
                    />

                    <Button
                        handleClick={handleSave}
                        small
                        label={loading ? 'Saving...' : 'Edit'}
                    />

                    {error && <p className="text-red-500 mt-4">{error}</p>}
                    {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default Profile;
