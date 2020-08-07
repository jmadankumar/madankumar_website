import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const CardImage = ({ src, background, className, ...props }) => {
    const commonClassName = 'w-full';
    if (background) {
        return (
            <div
                className={cx(
                    'bg-cover bg-no-repeat bg-center ',
                    commonClassName,
                    className
                )}
                style={{
                    backgroundImage: `url(${src})`,
                }}
            >
                {' '}
            </div>
        );
    }
    return <img {...props} src={src} className={cx(commonClassName, className)} />;
};

CardImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default CardImage;
