import React, { Component } from 'react';
import * as FeatherIcon from 'react-feather';
import { format } from 'date-fns';
import './footer.scss';

let today = Date.now();
const socialConnects = [
  { name: "Email", href: "mailto:kumarmadan.j@gmail.com", icon: FeatherIcon.Mail },
  { name: "Github", href: "https://github.com/jmadankumar", icon: FeatherIcon.GitHub },
  { name: "Twitter", href: "https://twitter.com/madan1994", icon: FeatherIcon.Twitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/madan-kumar-16469997/", icon: FeatherIcon.Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/madan.madans.kumar", icon: FeatherIcon.Facebook },

];

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="copy-right">&copy; Copy right {format(today, 'YYYY')}</div>
        <div className="made-with">
          <span >Made with </span>
          <FeatherIcon.Heart size={20} color="red" />
          <span className="author">by Madan Kumar</span>
        </div>
        <div className="social-links">
          {socialConnects.map(socialConnect => {
            return (
              <a target="_blank" rel="noopener noreferrer" className="social-media"
                href={socialConnect.href} key={socialConnect.name}>
                <socialConnect.icon size={20} />
                {/* <span>{socialConnect.name}</span> */}
              </a>
            );
          })}
        </div>
      </footer>
    )
  }
}
export default Footer;