import React from 'react';
import Helmet from 'react-helmet';

import TextCard from '../components/TextCard';
import LinkButton from '../components/LinkButton';

export default function Index({
  data
}) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <TextCard key={post.id}>
              <h1>
                {post.frontmatter.title}
              </h1>
              <h4>Posted on {post.frontmatter.date}</h4>
              <p>{post.excerpt}</p>
              <LinkButton link={post.frontmatter.path} text="Read more" />
            </TextCard>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;