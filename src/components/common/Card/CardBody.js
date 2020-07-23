import React from 'react';
import cx from 'classnames';

const CardBody = ({ children, className, ...props }) => {
    return (
        <div {...props} className={cx('p-4', className)}>
            {children}
        </div>
    );
};
export default CardBody;
