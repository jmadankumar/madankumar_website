import React from 'react';
import cx from 'classnames';

const styles = {
    h1: 'text-4xl font-bold m-0',
    h2: 'text-3xl font-bold m-0',
    h3: 'text-2xl font-bold m-0',
    h4: 'text-xl font-bold m-0',
    h5: 'text-lg font-bold m-0',
    h6: 'text-base font-normal m-0',
    p: 'text-base m-0',
};
const Typography = ({ variant, children, className }) => {
    const Component = variant;

    const getClassName = (variant) => {
        return styles[variant];
    };
    return (
        <Component className={cx(getClassName(variant), className)}>
            {children}
        </Component>
    );
};

export default Typography;
