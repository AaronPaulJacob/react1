import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from "styled-components"

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position: relative;
    overflow: hidden;

`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity: 0.7;
    z-index: 2;
`

const Wrapper = styled.div`
    display: flex; 
    
    transform: translateX(0vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => {
        console.log(props);
            switch(props.bg){
                case 0 : return "#e9d9ff"; 
                case 1 : return "#f9d9ff"; 
                case 2: return "#f1ffd9";
                default: return "white";
            }
        } };
`;

const Image = styled.img`
    height:70%;   
`
const ImgContainer = styled.div`
    height: 100%;

    display: flex;
    align-items: center;
    flex:1;
`;
const InfoContainer = styled.div`
    flex:1;
    padding:50px;
 `;

const Title = styled.h1`
    font-size:60px;
`;
const Desc = styled.p`
    margin:50px 0px;
    font-size: 20px;
    font-weight:500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color: transparent;
    cursor: pointer;
`;

const handleClick = (dir) =>{
    if(dir == 'left' ){

    }else{

    }
}
const Slider = () => {
    const [slideIndex , setSlideIndex ] = useState([]);

    let slideImgComponents = [];
    for (let i = 0; i < 3; i++)
    {
        slideImgComponents.push(
        <Slide bg={i}>
            <ImgContainer>
                <Image src="https://img3.junaroad.com/uiproducts/16269292/pri_175_p-1558007781.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Summer Sale {i}</Title>
                <Desc>Dont compromise on style! Get flat 30% off for new arrivals</Desc>
                <Button>Shop now</Button>
            </InfoContainer>
        </Slide>
        )
    }
    
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")  } >
                <KeyboardDoubleArrowLeft />
            </Arrow>
            <Wrapper>
             {slideImgComponents}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")  }>
                <KeyboardDoubleArrowRight />
            </Arrow>
        </Container>
    )
}

export default Slider