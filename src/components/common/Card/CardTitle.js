import React from 'react';
import Typography from '../Typography';

const CardTitle = ({ children, className, ...props }) => {
    return (
        <Typography variant="h2" className={className} {...props}>
            {children}
        </Typography>
    );
};
export default CardTitle;
