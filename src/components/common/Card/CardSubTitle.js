import React from 'react';
import Typography from '../Typography';
import cx from 'classnames';

const CardSubTitle = ({ children, className, ...props }) => {
    return (
        <Typography
            variant="h5"
            className={cx('text-gray-600', className)}
            {...props}
        >
            {children}
        </Typography>
    );
};
export default CardSubTitle;
