import React from 'react';
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
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  .card-image {
    height: auto;
  }
`;
const shortcodes = {
  Link,
  h1: (props) => <Typography {...props} variant="h1" className="mb-2" />,
  h2: (props) => <Typography {...props} variant="h2" className="mb-2" />,
  h3: (props) => <Typography {...props} variant="h3" className="mb-2" />,
  h4: (props) => <Typography {...props} variant="h4" className="mb-2" />,
  h5: (props) => <Typography {...props} variant="h5" className="mb-2" />,
  h6: (props) => <Typography {...props} variant="h6" className="mb-2" />,
  p: (props) => <Typography {...props} variant="p" className="mt-5 mb-5" />,
};

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
    <Wrapper>
      <Link href={to}>
        <Card className="card post mb-5">
          {imageUrl && (
            <CardImage
              src={imageUrl}
              alt="post cover"
              background={false}
              className="card-image"
            />
          )}
          <CardBody className="p-6">
            {isPreview && <CardTitle className="mb-2">{title}</CardTitle>}
            <CardSubTitle className="mb-2">{description}</CardSubTitle>
            {!isPreview && (
              <div className="mb-4">
                <MDXProvider components={shortcodes}>
                  <MDXRenderer>{content}</MDXRenderer>
                </MDXProvider>
              </div>
            )}
            <p className="flex flex-wrap mb-4">
              <span>Posted By</span>
              <PostAuthor author={author} showIcon={false} />
              <span className="ml-1">On</span>
              <PostDate date={date} showIcon={false} />
            </p>
            <PostTags tags={tags ?? []} className="mb-4" />

            {isPreview && (
              <Typography variant="h6" className="comments">
                <CommentCount shortname={disqusShortname} config={disqusConfig}>
                  0 Comments
                </CommentCount>
              </Typography>
            )}
          </CardBody>
        </Card>
      </Link>
    </Wrapper>
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
