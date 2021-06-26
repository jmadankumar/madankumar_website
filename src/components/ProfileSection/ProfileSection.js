import styled from '@emotion/styled';
import React from 'react';

const StyledProfileSection = styled.section`
  .section-heading span {
    color: var(--profile-section-heading-text-color);
    border-bottom: 4px solid var(--profile-section-heading-border-color);
  }
`;

const ProfileSection = ({ title, children }) => {
  return (
    <StyledProfileSection className="flex flex-col items-center py-5 mb-12">
      <div className="section-heading mb-8 md:mb-12 w-full">
        <span className="text-3xl font-medium  text-center font-bold tracking-wider">
          {title}
        </span>
      </div>
      <div className="w-full">{children}</div>
    </StyledProfileSection>
  );
};

export default ProfileSection;
