import React from 'react'
import Typography from '../common/Typography';

const ProfileSection = ({ title, children }) => {
  return (
    <section className="section-holder pb-2">
      <Typography variant="h5" className=" mb-2">{title}</Typography>
      <div className="section-content">{children}</div>
    </section>
  )
}

export default ProfileSection
