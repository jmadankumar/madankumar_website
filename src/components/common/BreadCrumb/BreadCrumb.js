import React from 'react';
import { Link } from 'gatsby';

const BreadCrumb = ({ links, className }) => {
    return (
        <div className={className}>
            {links.map((link, index) => (
                <>
                    <Link href={link.href} className="text-blue-500">
                        {link.title}
                    </Link>
                    {index < links.length - 1 && (
                        <span className="px-2">/</span>
                    )}
                </>
            ))}
        </div>
    );
};

export default BreadCrumb;
