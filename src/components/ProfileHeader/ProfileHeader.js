import React from 'react';
import ProfileImage from '../../images/drawing.svg';
import styled from '@emotion/styled';

const StyledProfileWrapper = styled.div`
    background-color: var(--bg-color);
    height: 320px;

    .profile-basic-container {
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
                <div className="w-full text-center uppercase ">
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
