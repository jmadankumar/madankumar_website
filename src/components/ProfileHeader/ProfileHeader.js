import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import useImage from '../../hooks/useImage';

const StyledProfileWrapper = styled.div`
  background-color: var(--bg-color);

  .profile-basic-container {
    height: 100%;
  }
  .profile-image {
    width: 160px;
    height: 160px;
  }

  @media (min-width: 768px) {

    .profile-image {
      width: 200px;
      height: 200px;
    }
  }
`;

const ProfileHeader = ({ profile }) => {
  const image = useImage('/logo.png');

  return (
    <StyledProfileWrapper className="header flex justify-center mb-12 md:mb-20">
      <div className="w-full lg:w-2/4 xl:4/6 flex flex-col md:flex-row mt-5 md:mt-12">
        <div className="profile-basic-container flex flex-col justify-start items-center mb-5 md:mb-0">
          <div className="w-full text-center">
            <GatsbyImage
              className="profile-image rounded-full m-auto shadow"
              alt="profile"
              image={image}
            />
          </div>
          {/* <div className="w-full text-center uppercase ">
          <h3 className="name text-2xl md:text-4xl font-bold">
            {profile.name}
          </h3>
          <h5 className="profession text-xl md:text-2xl ">{profile.role}</h5>
        </div> */}
        </div>
        <div className="flex items-center">
          <div className="p-3 md:p-8 text-lg sm:text-xl">
            I'm Madan Kumar, Full Stack web developer. Loves open source. Ask me about React
            and Javascript.
          </div>
        </div>
      </div>
    </StyledProfileWrapper>
  );
};

export default ProfileHeader;
