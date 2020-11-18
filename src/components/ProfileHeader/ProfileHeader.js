import React from 'react';
// import ProfileImage from '../../images/new_profile.webp';
import ProfileImage from '../../images/drawing.svg';

const ProfileHeader = ({ profile }) => {
    return (
        <div className="header">
            <div className="profile-basic-container flex flex-wrap  items-center">
                <div className="w-full text-center mb-5">
                    <img
                        src={ProfileImage}
                        className="profile-image rounded-full m-auto shadow"
                        alt="profile"
                    />
                </div>
                <div className="w-full text-center text-white">
                    <h3 className="name text-4xl">{profile.name}</h3>
                    <h5 className="profession text-2xl">{profile.role}</h5>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
