import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom';

const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'

export const Container = styled.div`
    background: ${thirdColor};
    min-height: calc(100vh - 135px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const TitlePage = styled.h2`
`
export const Title = styled.h2`
    margin-top: 20px;
    color: red;
    text-align: red;
`
export const H1 = styled.h4`
    display: none;
    text-align: center;
    margin: 10px 0px;
`
export const Form = styled.form`
    display: flex;
    width: 350px;
    margin-bottom: 40px;
    align-items: center;
    flex-direction: column;
    border: 1px solid ${mainColor};
    border-radius: 15px;
    padding: 40px 20px;
    @media screen and (max-width: 480px){
        width: 300px;
    }
    @media screen and (max-width: 320px){
        width: 250px;
    }
`
export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    margin: 15px 0px;
    width: 100%;
`
export const BoxLinks = styled.div`
    display: flex;
    justify-content: space-between;
    justify-content: space-evenly;
    width: 100%;
    border-bottom: 1px solid;
    padding-bottom: 10px;
    width: 100%;
`
export const Text = styled.label`
    text-align: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const Input = styled.input`
    border: 1px solid ${mainColor};
    border-radius: 8px;
    font-size: 18px;
    width: 100%;
    &:focus {
        outline: 0px;
    }
    ::placeholder{
        color: black;
        opacity: 40%;
    }


`
export const Error = styled.span`
    color: red;
`
export const NavLink = styled(Link)`
    text-decoration: none;
    color: ${mainColor};
    &:hover{
        color: ${mainColor};
    }

`
export const Button = styled.input`
    background: ${mainColor};
    color: ${thirdColor};
    padding: 10px 40px;
    border: 0px;
    cursor: pointer;
    border-radius: 20px;
    font-size: 16px;
`