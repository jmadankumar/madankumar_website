import styled from '@emotion/styled';
import React from 'react';
import Typography from '../common/Typography';

const StyledProfileSection = styled.section`
  .section-heading {
    color: var(--profile-section-heading-text-color);
  }
`;

const ProfileSection = ({ title, children }) => {
  return (
    <StyledProfileSection className="py-5 flex flex-col items-center">
      <Typography
        variant="h2"
        className="section-heading mb-12 text-center font-bold tracking-wider"
      >
        {title}
      </Typography>
      <div className="w-full lg:w-3/4 xl:4/6">{children}</div>
    </StyledProfileSection>
  );
};

export default ProfileSection;
