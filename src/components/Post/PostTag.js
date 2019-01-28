import React from 'react';
import PropTypes from 'prop-types';

const TAG_COLORS = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green',
    'cyan', 'blue', 'geekblue', 'purple'];

const PostTag = ({ title, color }) => {
    let _color = TAG_COLORS[Math.floor(Math.random() * TAG_COLORS.length)] || color;

    return (
        <span className={`badge badge-${_color} tag`}>
            #{title}
        </span>
    );
}

PostTag.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default PostTag;