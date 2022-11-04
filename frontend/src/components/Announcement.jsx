import React from 'react'
import styled from "styled-components"

const Container = styled.div`
height:30px;
padding:10px;
background-color:#D3D3D3;
color:#000;
align-items:center;
justify-content:center;
display:flex;
font-size:15px;
font-weight:500;
`

const Announcement = () => {
  return (
    <Container>
     Great Deal! Free shipping on first orders and over 1000Rs
    </Container>
  )
}

export default Announcement