import React from 'react';
import Helmet from 'react-helmet';

import SiteConfig from '../data/SiteConfig';
import TextCard from '../components/TextCard';

export default function Template({
    data
}) {
    const { markdownRemark: post } = data;
    return (
        <TextCard className="blog-post-container">
            <Helmet title={`${SiteConfig.siteTitle} | ${post.frontmatter.title}`} />
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted on {post.frontmatter.date}</h4>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </TextCard>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;