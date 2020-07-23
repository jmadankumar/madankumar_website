import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostAuthor from './PostAuthor';
import PostDate from './PostDate';
import PostTags from './PostTags';
import Card, {
    CardBody,
    CardImage,
    CardTitle,
    CardSubTitle,
} from '../common/Card';
import { CommentCount } from 'disqus-react';
import Typography from '../common/Typography';
import { Link } from 'gatsby';
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const shortcodes = { Link };

const Post = ({
    frontmatter,
    isPreview,
    content,
    to,
    url = 'http://localhost:8000',
}) => {
    const { title, description, image, date, tags, id, author } = frontmatter;
    const imageUrl = image ? image.childImageSharp.fixed.src : '';

    const disqusConfig = {
        identifier: id,
        title: title,
        url: `${url}${to}`,
    };

    const disqusShortname = 'http-madankumar-js-org';

    if (process.env.NODE_ENV === 'development') {
        url = 'http://localhost:8000';
    }
    return (
        <Link href={to}>
            <Card className="card post mb-5">
                <CardImage
                    src={imageUrl}
                    alt="post cover"
                    background
                    className="h-64"
                />
                <CardBody>
                    <CardTitle className="mb-2">{title}</CardTitle>
                    <CardSubTitle className="mb-2">{description}</CardSubTitle>
                    <p className="mb-2">
                        Posted By
                        <PostAuthor author={author} showIcon={false} />
                        On
                        <PostDate date={date} showIcon={false} />
                    </p>
                    <PostTags tags={tags ?? []} className="mb-2" />
                    {!isPreview && (
                        <MDXProvider components={shortcodes}>
                            <MDXRenderer>{content}</MDXRenderer>
                        </MDXProvider>
                    )}
                    {isPreview && (
                        <Typography variant="h6" className="comments">
                            <CommentCount
                                shortname={disqusShortname}
                                config={disqusConfig}
                            >
                                0 Comments
                            </CommentCount>
                        </Typography>
                    )}
                </CardBody>
            </Card>
        </Link>
    );
};
Post.propTypes = {
    frontmatter: {
        image: PropTypes.object,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        tags: PropTypes.array,
        description: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.string,
    },
    content: PropTypes.string,
    url: PropTypes.string,
    to: PropTypes.string,
};

Post.defaultProps = {
    showImage: false,
    image: '',
    showIcon: false,
};

export default Post;
