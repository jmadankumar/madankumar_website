import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const PostComments = ({ config, shortname }) => {
    return <DiscussionEmbed shortname={shortname} config={config} />;
};
export default PostComments;
