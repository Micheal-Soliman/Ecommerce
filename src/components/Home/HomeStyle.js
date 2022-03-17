import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'

export const Container = styled.div`
    background: ${thirdColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 20px;
`
export const Wrapper = styled.div`
    min-height: calc(100vh - 135px);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 900px){
        grid-template-columns: repeat(1, 500px);
    }
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, 450px);
    }
    @media screen and (max-width: 600px){
        grid-template-columns: repeat(1, 400px);
    }
    @media screen and (max-width: 480px){
        grid-template-columns: repeat(1, 350px);
    }
    @media screen and (max-width: 320px){
        grid-template-columns: repeat(1, 280px);
    }
`
export const H2 = styled.h2`
text-align: center;
margin-top: 20px;
`
export const Card = styled.div`
    margin: 30px;
    height: 400px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 0px 5px ${mainColor};    
    -webkit-transition: 0.5s;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    min-width: 250px;
    @media screen and (max-width: 320px){
        min-width: auto;
    }
    &:hover {
        box-shadow: 0 0px 20px ${mainColor};
        border: 0px;
    }
`
export const Image = styled.img`
    width: 180px;
    height: 180px;
`
export const Box = styled.div`
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    width: 100%;
}

`
export const Title = styled.div`
`
export const Price = styled.div`
    width: 100%;
`
export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`
export const NavLink = styled(Link)`
    text-decoration: none;
    padding: 8px;
    border: 2px solid ${mainColor};
    background: white;
    border-radius: 20px;
    color: ${mainColor};
    transition: 0.6s;
    font-weight: 500;
    &:hover {
        background: ${mainColor};
        color: white;
    }
`
export const Button = styled.button`
    border: 0px;
    padding: 10px;
    width: 100px;
    background: ${mainColor};
    border: 2px solid ${mainColor};
    color: white;    
    border-radius: 20px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    &:active {
        background: ${thirdColor};
        color: ${mainColor};   
    }
    @media screen and (max-width: 340px){
        width: auto;
    }
`
export const ShowMore = styled(Link)`
    text-decoration: none;
    border: 2px solid ${mainColor};
    border-radius: 20px;
    padding: 10px;
    color: ${secondColor};
    background: ${thirdColor};
    font-weight: 500;
    letter-spacing: 2px;
    transition: 0.6s;
    &:hover {
        background: ${mainColor};
        color: white;
    }
`
