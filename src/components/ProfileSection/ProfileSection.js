import React from 'react';
import Typography from '../common/Typography';

const ProfileSection = ({ title, children }) => {
    return (
        <section className="py-5 flex flex-col items-center">
            <Typography
                variant="h2"
                className="mb-12 text-center font-bold tracking-wider"
            >
                {title}
            </Typography>
            <div className="w-full lg:w-3/4 xl:4/6">{children}</div>
        </section>
    );
};

export default ProfileSection;
