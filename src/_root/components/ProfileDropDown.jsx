import React, { useState } from 'react'
import { useAuth } from '../../store/Auth-context';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from 'react-icons/fi';


const ProfileDropDown = () => {
    const { authUser, logOut } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const handleProfileClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/signin');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    

  return (
    <div >
    {authUser ? (
        <div className="relative ">
            <img
                src={authUser.photoURL || '../../../public/profile.jpg'}
                alt="Profile"
                className="w-12 h-12 bg-fill rounded-full border-blue border-2 cursor-pointer"
                onClick={handleProfileClick}
            />
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48  bg-navy rounded-lg  shadow-lg py-2 z-20">
                         <div className='flex items-center justify-center px-4 py-2 hover:bg-blue text-babyblue cursor-pointer'>
                                <CgProfile size={20} />
                                <Link
                                    to="/profile"
                                    className="block ml-2"
                                >
                                    Profile
                                </Link>
                            </div>
                            <div 
                                className='flex items-center justify-center px-4 py-2 hover:bg-blue text-babyblue cursor-pointer'
                                onClick={handleLogout}
                            >
                                <FiLogOut size={20} />
                                <span className="block ml-2">Logout</span>
                            </div>
                        </div>
            )}
        </div>
    ):(

        <Button label="Sign In" small handleClick={()=>navigate('/signin') } />

    )
    
    }
</div>  )
}

export default ProfileDropDown