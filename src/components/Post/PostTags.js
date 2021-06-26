import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../common/Tag';
import cx from 'classnames';

const PostTags = ({ tags, className }) => {
  return (
    <div className={cx('flex flex-wrap', className)}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
};

PostTags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default PostTags;
