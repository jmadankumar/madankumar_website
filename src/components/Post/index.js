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

class Post extends Component {
    navigate(to) {
        window.location.href = to;
    }
    render() {
        console.log(process.env.NODE_ENV);
        let {
            showImage,
            image,
            author,
            date,
            tags,
            description,
            showIcon,
            title,
            to,
            showContent,
            content,
            id,
            url,
        } = this.props;
        const disqusShortname = 'http-madankumar-js-org';
        if (process.env.NODE_ENV === 'development') {
            url = 'http://localhost:8000';
        }
        const disqusConfig = {
            identifier: id,
            title: title,
            url: `${url}${to}`,
        };
        return (
            <Card className="card post" onClick={() => this.navigate(to)}>
                {showImage && <CardImage src={image} alt="post cover" background className="h-64"/>}
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubTitle className="mb-2">
                        Posted By
                        <PostAuthor author={author} showIcon={showIcon} />
                        On
                        <PostDate date={date} showIcon={showIcon} />
                    </CardSubTitle>
                    <PostTags tags={tags ?? []} />
                    {showContent && (
                        <div
                            dangerouslySetInnerHTML={{ __html: content }}
                        ></div>
                    )}
                    {!showContent && (
                        <h6 className="comments">
                            <CommentCount
                                shortname={disqusShortname}
                                config={disqusConfig}
                            >
                                0 Comments
                            </CommentCount>
                        </h6>
                    )}
                </CardBody>
            </Card>
        );
    }
}

Post.propTypes = {
    showImage: PropTypes.bool,
    image: PropTypes.string,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.array,
    showIcon: PropTypes.bool,
    description: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string,
    showContent: PropTypes.bool,
    content: PropTypes.string,
    id: PropTypes.string,
    url: PropTypes.string,
};

Post.defaultProps = {
    showImage: false,
    image: '',
    showIcon: false,
};

export default Post;
