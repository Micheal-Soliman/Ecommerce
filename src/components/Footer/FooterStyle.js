import styled from 'styled-components'
import { NavLink as Link } from "react-router-dom";
const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'

export const Container = styled.div`
    background: ${mainColor};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${thirdColor};
    letter-spacing: 2px;
    font-weight: 500;
    @media screen and (max-width: 480px){
        font-weight: unset;
        font-size: 12px;
        letter-spacing: 0px;
    }
`
export const Name = styled.span`
    color: ${secondColor};
    margin: 0px 5px;

`
export const NavLink = styled.a`
    text-decoration: none;
    color: ${thirdColor};

`