import React from 'react';
import Typography from '../Typography';
import cx from 'classnames';

const CardSubTitle = ({ children, className, ...props }) => {
    return (
        <Typography
            variant="h6"
            className={cx('text-gray-600 font-normal', className)}
            {...props}
        >
            {children}
        </Typography>
    );
};
export default CardSubTitle;
