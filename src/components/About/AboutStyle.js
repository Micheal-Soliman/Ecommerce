import styled from 'styled-components'
import {BiUserCircle} from 'react-icons/bi'
const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'

export const Container = styled.div`
    background: ${thirdColor};
    height: calc(100vh - 135px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${secondColor};
`
export const Title = styled.h1`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);    
    letter-spacing: 2px;
`
export const Card = styled.div`
    width: 40vw;
    height: 10vh;
    padding: 10px 0px;
    border: 1px solid ${mainColor};
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    perspective: 1000px;
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        width: 60vw;
    }
    @media screen and (max-width: 380px){
        width: 75vw;
    }
`
export const CardInner = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    &:hover{
        transform: rotateY(180deg);
    }
`
export const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`
export const CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    flex-direction: column;
`
export const User = styled(BiUserCircle)`
    font-size: 25px;
    @media screen and (max-width: 768px){
        font-size: 21px;
    }
`
export const Name = styled.span`
    font-size: 20px;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`
export const NavLink = styled.a`
    text-decoration: none;
    color: ${secondColor};
    &:hover{
        color: ${mainColor};
    }
`
