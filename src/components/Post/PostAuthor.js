import React from 'react';
import PropTypes from 'prop-types';
import constants from '../../helpers/constants';
import * as FeatherIcon from 'react-feather';

const PostAuthor = ({ author, showIcon }) => {
    return (
        <span className="author">
            {showIcon && <FeatherIcon.User size={constants.ICON_SIZE} />}
            {author}
        </span>);
};

PostAuthor.propTypes = {
    author: PropTypes.string.isRequired,
    showIcon: PropTypes.bool
};

PostAuthor.defaultProps = {
    showIcon: false
}

export default PostAuthor;
