import React from 'react';
import PropTypes from 'prop-types';
import constants from '../../helpers/constants';
import * as FeatherIcon from 'react-feather';
import styled from '@emotion/styled';

const StyledPostDate = styled.div``;

const PostDate = ({ date, showIcon }) => {
  return (
    <StyledPostDate className="date" className="ml-1">
      {showIcon && <FeatherIcon.Clock size={constants.ICON_SIZE} />}
      {date}
    </StyledPostDate>
  );
};

PostDate.propTypes = {
  date: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
};

PostDate.defaultProps = {
  showIcon: false,
};

export default PostDate;
