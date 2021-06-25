import React from 'react';
import PropTypes from 'prop-types';
import constants from '../../helpers/constants';
import * as FeatherIcon from 'react-feather';
import styled from '@emotion/styled';

const StyledPostAuthor = styled.div``;

const PostAuthor = ({ author, showIcon }) => {
  return (
    <StyledPostAuthor className="author ml-1">
      {showIcon && <FeatherIcon.User size={constants.ICON_SIZE} />}
      {author}
    </StyledPostAuthor>
  );
};

PostAuthor.propTypes = {
  author: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
};

PostAuthor.defaultProps = {
  showIcon: false,
};

export default PostAuthor;
