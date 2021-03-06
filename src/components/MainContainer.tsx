import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    margin: '3rem auto';
    padding: 0;
    background-color: 'white';
    z-index: 1;
`

class MainContainer extends React.Component {
  render() {
    const { children, style } = this.props;
    return (
        <Container style={style}>
            {children}
        </Container>
    );
  }
}

MainContainer.propTypes = {
    children: PropTypes.element.isRequired,
    style: PropTypes.object
}

export default MainContainer
