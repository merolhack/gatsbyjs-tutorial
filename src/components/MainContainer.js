import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    margin: '3rem auto';
    padding: 0;
    background-color: 'white';
`;

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
};

export default MainContainer;
