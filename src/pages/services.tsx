import Link from "gatsby-link"
import React, { Component } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import MainContainer from "../components/MainContainer.tsx"

const TitleContainer = styled.div`
    display: block;
    clear: both;
    width: 100vw;
    height: 20vh;
`;
const CounterContainer = styled.div`
    display: block;
    clear: both;
    width: 100vw;
    height: 20vh;
`;
const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
`;
const LinksContainer = styled.div`
    display: block;
    clear: both;
    width: 100vw;
    height: 20vh;
`;

class Services extends Component {
    state = {
        counter: 0
    };

    constructor(props) {
        super(props);
    }

    /**
     * Increments the counter
     */
    handleCounter = () => {
        const counter = this.state.counter + 1;
        this.setState({ counter });
    }

    render() {
        const { counter } = this.state;
        const { data } = this.props;
        return (
            <MainContainer style={{backgroundColor: 'green'}}>
                <div>
                    <Helmet
                        title={data.site.siteMetadata.titles.services}
                        meta={[
                            { name: `description`, content: `Sample` },
                            { name: `keywords`, content: `sample, something` },
                        ]}
                        />
                    <TitleContainer>
                        <h3>{data.site.siteMetadata.titles.services}</h3>
                    </TitleContainer>

                    <CounterContainer>
                        <p><strong>Contador:</strong> {counter}</p>
                        <Button onClick={this.handleCounter}>Increment</Button>
                    </CounterContainer>

                    <LinksContainer>
                        <p>
                            <Link to="/">Home</Link>
                        </p>
                    </LinksContainer>
                </div>
            </MainContainer>
        );
    }
}

export const query = graphql`
  query ServicesQuery {
    site {
      siteMetadata {
        titles {
            services
        }
      }
    }
  }
`;

export default Services;
