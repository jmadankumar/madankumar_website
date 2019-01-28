import React from 'react';
import PropTypes from 'prop-types';
import PostTag from './PostTag';

const PostTags = ({ tags }) => {   
    return (
        <div className="">
            {tags.map(tag => <PostTag title={tag} key={tag}/>)}
        </div>
    );
}

PostTags.propTypes = {
    tags: PropTypes.array.isRequired
}

export default PostTags;