import React from 'react';
import { Link } from 'gatsby';
import * as FeatherIcon from 'react-feather';
import cx from 'classnames';

const BreadCrumb = ({ links, className }) => {
  return (
    <div className={cx('flex flex-wrap', className)}>
      {links.map((link, index) => (
        <>
          <Link href={link.href} className="text-blue-500">
            {link.title}
          </Link>
          {index < links.length - 1 && (
            <span className="px-2">
              <FeatherIcon.ArrowRight />
            </span>
          )}
        </>
      ))}
    </div>
  );
};

export default BreadCrumb;
