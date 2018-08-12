import Link from "gatsby-link"
import React, { Component } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import "../styles/main.scss"

import MainContainer from "../components/MainContainer"

const H5 = styled.h5`
    margin-bottom: 10px;
`
const Span = styled.span`
    color: #BBB;
`

class Main extends Component {
    state = {}
    render() {
        const { data } = this.props
        console.log("data", data)
        return (
            <MainContainer style={{ backgroundColor: "red" }}>
                <div>
                    <Helmet
                        title="Lenin GatsbyJS test...."
                        meta={[
                            { name: `description`, content: `Sample` },
                            { name: `keywords`, content: `sample, something` },
                        ]}
                        />
                    <h3>{data.site.siteMetadata.titles.main}</h3>
                    <ul>
                        <li><p><Link to="/about-us">Go to About us</Link></p></li>
                        <li><p><Link to="/services">Go to Services</Link></p></li>
                        <li><p><Link to="/my-files">Go to My Files</Link></p></li>
                        <li><p><Link to="/markdown">Go to Markdown</Link></p></li>
                    </ul>
                    <h4>
                        {data.allMarkdownRemark.totalCount} Posts
                    </h4>
                    {data.allMarkdownRemark.edges.map(({ node }) =>
                        <div key={node.id}>
                            <Link
                                to={node.fields.slug}
                                css={{ textDecoration: `none`, color: `inherit` }}
                            >
                                <H5>
                                    {node.frontmatter.title}{" "}
                                    <Span>— {node.frontmatter.date}</Span>
                                </H5>
                                <p>
                                    {node.excerpt}
                                </p>
                            </Link>
                        </div>
                    )}
                </div>
            </MainContainer>
        )
    }
}

export const query = graphql`
  query MainQuery {
    site {
      siteMetadata {
        titles {
            main
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
            node {
                id
                frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                }
                fields {
                    slug
                }
                excerpt
            }
        }
    }
}
`

export default Main
