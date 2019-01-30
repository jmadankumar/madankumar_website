import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostAuthor from './PostAuthor';
import PostDate from './PostDate';
import PostTags from './PostTags';
import { CommentCount } from 'disqus-react';

class Post extends Component {
    navigate(to) {
        window.location.href = to;
    }
    render() {
        console.log(process.env.NODE_ENV);
        let { showImage, image, author, date, tags, description, showIcon, title, to, showContent, content, id, url } = this.props;
        const disqusShortname = "http-madankumar-js-org";
        if (process.env.NODE_ENV === 'development') {
            url = 'http://localhost:8000'
        }
        const disqusConfig = {
            identifier: id,
            title: title,
            url: `${url}${to}`
        };
        return (
            <div className="card post" onClick={() => this.navigate(to)}>
                {showImage && (<div className="card-image-top image">
                    <img src={image} alt="post cover" />
                </div>)}
                <div className="card-body">
                    <h3 className="card-title">
                        {title}
                    </h3>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Posted By
                        <PostAuthor author={author} showIcon={showIcon} />
                        On
                        <PostDate date={date} showIcon={showIcon} />
                    </h6>
                    <PostTags tags={tags} />
                    {showContent && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
                    {!showContent && (
                        <h6 className="comments">
                            <CommentCount  shortname={disqusShortname} config={disqusConfig}>
                                0 Comments
                            </CommentCount>
                        </h6>
                    )}
                </div>
            </div>);
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
    url: PropTypes.string
};

Post.defaultProps = {
    showImage: false,
    image: '',
    showIcon: false
}

export default Post;