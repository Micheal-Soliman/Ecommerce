import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'

export const Container = styled.div`
    display: flex;
    background: ${thirdColor};
    justify-content: center;
    align-items: center;
    height: calc(100vh - 135px);
    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: space-around;
    }
`
export const ContainerImg = styled.div`
    flex:1;

`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    @media screen and (max-width: 768px){
        width: 50%;
        height: 50%;
    }
`
export const ContainerText = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const H1 = styled.h1`
    color: ${mainColor};
    font-size: 100px;
    margin-bottom: 40px;
    width: 100%;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 50px;
    }
`
export const H2 = styled.h2`
    font-size: 50px;
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
    @media screen and (max-width: 768px){
        font-size: 25px;
    }
`
export const H3 = styled.h3`
    margin-bottom: 40px;
    width: 100%;
    text-align: center;
`
export const NavLink = styled(Link)`
    text-decoration: none;
    margin-right: 20px;
    text-decoration: none;
    font-size: 24px; 
    @media screen and (max-width: 768px){
        margin-bottom: 40px;
    }

`