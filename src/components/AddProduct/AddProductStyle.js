import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {GrCheckboxSelected} from 'react-icons/gr'

const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'

export const Wrapper = styled.div`
    width: 100%;
    background: ${thirdColor};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Form = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding: 40px 20px;
    // @media screen and (max-width: 480px){
    //     width: 300px;
    // }
    // @media screen and (max-width: 320px){
    //     width: 250px;
    // }
`
export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 15px 0px;
    width: 100%;
`
export const BoxSearch = styled.div`
    width:50%;
`
export const Option = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;

`
export const ValueOption = styled.span`
`
export const SelectIcon = styled(GrCheckboxSelected)`
    cursor: pointer;
`
export const Error = styled.span`
    color: red;
`

export const TextBox = styled.div`
    width: 50%;

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
    width: 50%;
    &:focus {
        outline: 0px;
    }
    ::placeholder{
        color: black;
        opacity: 40%;
    }
    @media screen and (max-width: 768px) {
        width: 70%;
    }
    @media screen and (max-width: 480px) {
        width: 90%;
    }
`
export const BoxBtn = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;    
    align-items: center;
    @media screen and (max-width: 480px){
        flex-direction: column;
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
    @media screen and (max-width: 480px){
        width:52%;
        padding: 10px;
    }
`
export const NavLink = styled(Link)`
    background: ${mainColor};
    text-decoration: none;
    color: ${thirdColor};
    padding: 10px 40px;
    border: 0px;
    cursor: pointer;
    border-radius: 20px;
    font-size: 16px;
    margin-left: 10px;
    text-align: center;
    &:hover{
        color: ${thirdColor};
    }
    @media screen and (max-width: 480px){
        margin: 10px 0px 0px 0px;
        width:52%;
        padding: 10px;
    }
    @media screen and (max-width: 320px){
        margin: 10px 0px 0px 0px;
        width:70%;
        padding: 10px;
    }
`