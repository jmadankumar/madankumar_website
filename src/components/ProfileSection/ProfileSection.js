import React from 'react'

const ProfileSection = ({ title, children }) => {
  return (
    <section className="section-holder pb-2">
      <h5 className="section-title text-xl mb-2">{title}</h5>
      <div className="section-content">{children}</div>
    </section>
  )
}

export default ProfileSection
