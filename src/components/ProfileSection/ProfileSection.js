import React from 'react'
import Typography from '../common/Typography';

const ProfileSection = ({ title, children }) => {
  return (
    <section className="section-holder py-5">
      <Typography variant="h2" className="mb-4 text-center font-bold tracking-wider underline">{title}</Typography>
      <div className="section-content">{children}</div>
    </section>
  )
}

export default ProfileSection
