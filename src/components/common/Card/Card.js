import React from 'react';
import cx from 'classnames';

const Card = ({ children, className }) => {
  return <div className={cx('p-4 bg-white rounded-md', className)}>{children}</div>;
};
export default Card;
