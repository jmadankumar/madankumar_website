import styled from '@emotion/styled';
import React from 'react';
import * as FeatherIcon from 'react-feather';

const certifications = [
  {
    name: 'MongoDB Basics',
    providedBy: 'MongoDB University',
    credentialUrl:
      'https://university.mongodb.com/course_completion/8da81dcf-2207-47d8-bf5f-2dbda6c743e2?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing',
  },
  {
    name: 'APIs and Microservices',
    providedBy: 'FreeCodeCamp',
    credentialUrl:
      'https://freecodecamp.org/certification/jmadankumar/apis-and-microservices',
  },
  {
    name: 'Microsoft Certified:Azure Fundamentals',
    providedBy: 'MicroSoft',
    credentialUrl:
      'https://www.youracclaim.com/badges/c36e6646-1550-421b-8a49-12273177a78a?source=linked_in_profile',
  },
  {
    name: 'Responsive Web Design',
    providedBy: 'FreeCodeCamp',
    credentialUrl:
      'https://freecodecamp.org/certification/jmadankumar/responsive-web-design',
  },
  {
    name: 'Javascript Algorithms and Data Structures',
    providedBy: 'FreeCodeCamp',
    credentialUrl:
      'https://freecodecamp.org/certification/jmadankumar/javascript-algorithms-and-data-structures',
  },
];

const StyledCertifications = styled.div``;

const Certifications = () => {
  return (
    <StyledCertifications>
      {certifications.map((certification) => (
        <a
          href={certification.credentialUrl}
          rel="noreferrer noopener"
          className="flex text-lg md:text-xl font-medium hover:underline mb-5 "
        >
          <FeatherIcon.Award className="text-base md:text-lg" />
          <span className="ml-2">{certification.name}</span>
        </a>
      ))}
    </StyledCertifications>
  );
};

export default Certifications;
