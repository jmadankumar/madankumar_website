import React from 'react';
import Typography from '../common/Typography';

const ProfileSection = ({ title, children }) => {
    return (
        <section className="py-5 flex flex-col items-center">
            <Typography
                variant="h2"
                className="mb-12 text-center font-bold tracking-wider text-white"
            >
                {title}
            </Typography>
            <div className="text-white w-full md:w-2/3">{children}</div>
        </section>
    );
};

export default ProfileSection;
