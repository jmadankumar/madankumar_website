import React from 'react';
import * as FeatherIcon from 'react-feather';
import { format } from 'date-fns';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const today = Date.now();

const socialConnects = [
  {
    name: 'Email',
    href: 'mailto:kumarmadan.j@gmail.com',
    icon: FeatherIcon.Mail,
  },
  {
    name: 'Github',
    href: 'https://github.com/jmadankumar',
    icon: FeatherIcon.GitHub,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/madan1994',
    icon: FeatherIcon.Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/madan-kumar-16469997/',
    icon: FeatherIcon.Linkedin,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/madan.madans.kumar',
    icon: FeatherIcon.Facebook,
  },
];

const StyledFooter = styled.footer`
  background-color: #353a3d;
  background: linear-gradient(
    160deg,
    rgb(12, 52, 75) 12.5%,
    rgb(41, 81, 102) 85%
  );
  color: #ffffff;
  text-align: center;
  padding: 20px;
  margin-bottom: 55px;
  div {
    padding: 5px;
  }
  .made-with {
    .author {
      padding-left: 5px;
    }
  }
  .social-links .social-media {
    margin: 5px;
    color: #ffffff;
  }
  @media (min-width: 768px) {
    & {
      margin-bottom: 0px;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="copy-right">
        &copy; Copy right {format(today, 'yyyy')}
      </div>
      <div className="made-with">
        <span>Made with</span>
        <FeatherIcon.Heart
          size={20}
          color="red"
          className="inline-block mx-2"
        />
        by
        <Link href="https://github.com/jmadankumar">
          <span className="author ml-2">Madan Kumar</span>
        </Link>
      </div>
      <div className="social-links flex justify-center">
        {socialConnects.map((socialConnect) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="social-media"
              href={socialConnect.href}
              key={socialConnect.name}
            >
              <socialConnect.icon size={20} className="inline-block" />
              {/* <span>{socialConnect.name}</span> */}
            </a>
          );
        })}
      </div>
    </StyledFooter>
  );
};
export default Footer;
