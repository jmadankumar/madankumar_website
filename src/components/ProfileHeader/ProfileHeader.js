import React from 'react';
// import ProfileImage from '../../images/new_profile.webp';
import ProfileImage from '../../images/drawing.svg';
// import ProfileImage from '../../images/bg2.svg';
import styled from '@emotion/styled';
import bg from '../../images/bg2.svg';

const StyledProfileWrapper = styled.div`
    background-color: #001220;
    position: relative;
    height: 320px;

    .profile-basic-container {
        position: relative;
        z-index: 999;
        height: 100%;
    }
    .profile-image {
        width: 120px;
        height: 120px;
    }

    @media (min-width: 768px) {
        & {
            height: 450px;
            margin-top: 60px;
        }
       
        .profile-image {
            width: 200px;
            height: 200px;
        }
    }
`;

const ProfileHeader = ({ profile }) => {
    return (
        <StyledProfileWrapper className="header">
            <div className="profile-basic-container flex flex-col justify-start items-center">
                <div className="w-full text-center mt-12 mb-5">
                    <img
                        src={ProfileImage}
                        className="profile-image rounded-full m-auto shadow"
                        alt="profile"
                    />
                </div>
                <div className="w-full text-center text-white uppercase ">
                    <h3 className="name text-2xl md:text-4xl font-bold">
                        {profile.name}
                    </h3>
                    <h5 className="profession text-xl md:text-2xl ">
                        {profile.role}
                    </h5>
                </div>
            </div>
        </StyledProfileWrapper>
    );
};

export default ProfileHeader;
