import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

export default function HomePage(){
return(
    <Container>
    
        <h1>Welcome to STUDIO VIE</h1>
        <Link to="/register">Register</Link>
        
    </Container>
)
}

const Container = styled.div`
  height : 100vh;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items:center;
`;