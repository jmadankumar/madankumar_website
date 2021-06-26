import styled from '@emotion/styled';
import React from 'react';

const StyledTag = styled.div`
  background-color: #667eea;
  background-color: var(--tag-color);
  color: #fff;
  color: var(--tag-text-color);
`;

const Tag = ({ children }) => {
  return (
    <StyledTag
      className="py-1 px-3 mr-2 mb-2 rounded-md text-xs md:text-sm"
    >
      {children}
    </StyledTag>
  );
};

export default Tag;
