import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import MainContainer from "../components/MainContainer";

const H3 = styled.h3`
    margin-bottom: 10px;
`;
const Span = styled.span`
    color: #BBB;
`;

class Markdown extends Component {
    state = {};
    render() {
        const { data } = this.props;
        return (
            <MainContainer style={{ backgroundColor: 'grey' }}>
                <div>
                    <Helmet
                        title={data.site.siteMetadata.titles.markdown}
                        meta={[
                            { name: `description`, content: `Sample` },
                            { name: `keywords`, content: `sample, something` },
                        ]}
                        />
                    <h2>{data.site.siteMetadata.titles.markdown}</h2>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id}>
                            <H3>
                                {node.frontmatter.title}{" "}
                                <Span>— {node.frontmatter.date}</Span>
                            </H3>
                            <p>{node.excerpt}</p>
                        </div>
                    ))}
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                </div>
            </MainContainer>
        );
    }
}

export const query = graphql`
  query MarkdownQuery {
    site {
      siteMetadata {
        titles {
            markdown
        }
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt
          }
        }
    }
  }
`;

export default Markdown;
