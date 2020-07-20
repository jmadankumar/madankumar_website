import React from 'react';
import ProfileImage from '../../images/new_profile.webp';

const ProfileHeader = ({ profile }) => {
    return (
        <div className="header">
            <div className="profile-basic-container">
                <div className="pic-holder">
                    <img
                        src={ProfileImage}
                        className="profile-image rounded-full"
                        alt="profile"
                    />
                </div>
                <div className="basic-detail">
                    <h3 className="name text-4xl">{profile.name}</h3>
                    <h5 className="profession text-2xl">{profile.role}</h5>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
