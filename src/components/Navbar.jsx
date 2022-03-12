import React from 'react'
import styled from 'styled-components';
import {Search , ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const Container = styled.div`
    height : 60px;

`
const Wrapper = styled.div`
    padding : 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items:center;
`
const Left = styled.div`
    display:flex;
    flex:1;
    align-items: center;
`
const Center = styled.div`
    text-align:center;
    flex:1;
`
const Right = styled.div`
    display:flex;
    flex:1;
    align-items: center;
    justify-content:flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin:1px 12px;
`
const Language = styled.span`
    font-size: 14px;
    cursor:pointer;
`

const SearchContainer = styled.div`
    display:flex;
    border: 1px solid lightgray ; 
    align-items: center;
    margin-left:25px;
    padding:5px;
`

const Input = styled.input`
    border: none;
`

const Logo = styled.h1``
const SimpleBadge = ()=> {
    return (
      <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlined color="action" />
      </Badge>
    );
  }

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                       <Input />
                        <Search style={{ color:"gray" , fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>Aaron </Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <SimpleBadge />
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar