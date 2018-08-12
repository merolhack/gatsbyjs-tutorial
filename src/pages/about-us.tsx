import Link from "gatsby-link"
import React, { Component } from "react"
import Helmet from "react-helmet"

import MainContainer from "../components/MainContainer.tsx";

class AboutUs extends Component {
    state = {};
    render() {
        const { data } = this.props;
        return (
            <MainContainer style={{backgroundColor: 'blue'}}>
                <div>
                    <Helmet
                        title={data.site.siteMetadata.titles.aboutUs}
                        meta={[
                            { name: `description`, content: `Sample` },
                            { name: `keywords`, content: `sample, something` },
                        ]}
                        />
                    <h3>{data.site.siteMetadata.titles.aboutUs}</h3>
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                </div>
            </MainContainer>
        );
    }
}

export const query = graphql`
  query AboutUsQuery {
    site {
      siteMetadata {
        titles {
            aboutUs
        }
      }
    }
  }
`;

export default AboutUs;
