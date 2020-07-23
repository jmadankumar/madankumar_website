import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../common/Badge';

const PostTags = ({ tags }) => {
    return (
        <div className="mb-2">
            {tags.map((tag) => (
                <Badge key={tag}>#{tag}</Badge>
            ))}
        </div>
    );
};

PostTags.propTypes = {
    tags: PropTypes.array.isRequired,
};

export default PostTags;
