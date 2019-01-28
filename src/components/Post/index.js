import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostAuthor from './PostAuthor';
import PostDate from './PostDate';
import PostTags from './PostTags';

class Post extends Component {
    navigate(to) {
        window.location.href = to;
    }
    render() {
        const { showImage, image, author, date, tags, description, showIcon, title, to, showContent, content } = this.props;
        return (
            <div className="card post" onClick={() => this.navigate(to)}>
                {showImage && (<div className="card-image-top">
                    <img src={image} />
                </div>)}
                <div className="card-body">
                    <h4 className="card-title">
                        {title}
                    </h4>
                    <h6 className="card-subtitle mb-2 text-muted">
                        <PostAuthor author={author} showIcon={showIcon} />
                        <PostDate date={date} showIcon={showIcon} />
                    </h6>
                    <PostTags tags={tags} />
                    {showContent && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
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
    to: PropTypes.string.isRequired,
    showContent: PropTypes.bool,
    content: PropTypes.string
};

Post.defaultProps = {
    showImage: false,
    image: '',
    showIcon: false
}

export default Post;