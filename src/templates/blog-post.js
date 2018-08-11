import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <Helmet
                title={post.frontmatter.title}
                meta={[
                    { name: `description`, content: `Sample` },
                    { name: `keywords`, content: `sample, something` },
                ]}
                />
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <p>
                <Link to="/">Home</Link>
            </p>
        </div>
    );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
