import React from 'react';
import cx from 'classnames';

const Card = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cx('', className)}>
      {children}
    </div>
  );
};
export default Card;
