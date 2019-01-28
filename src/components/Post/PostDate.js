import React from 'react';
import PropTypes from 'prop-types';
import constants from '../../helpers/constants';
import * as FeatherIcon from 'react-feather';

const PostDate = ({ date, showIcon }) => {
    return (
        <span className="date" style={{marginRight:'10px'}}>
            {showIcon && <FeatherIcon.Clock size={constants.ICON_SIZE} />}
            {date}
        </span>
    );
};

PostDate.propTypes = {
    date: PropTypes.string.isRequired,
    showIcon: PropTypes.bool    
};

PostDate.defaultProps = {
    showIcon: false    
}

export default PostDate;