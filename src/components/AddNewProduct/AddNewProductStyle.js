import styled from 'styled-components'

const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'

export const Wrapper = styled.div`
    width: 100%;
    background: ${thirdColor}
`
export const Title = styled.h2`
    margin-top: 20px;
    text-align: center;
    color: red;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    // border-left: 1px solid ${mainColor};
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
export const SelectProduct = styled.select`
    width: 50%;
    border: 1px solid ${mainColor};
    border-radius: 5px;
    &:focus{
        min-width: 30%;
        width: auto;
        border: 1px solid ${mainColor};
        border-radius: 5px;
        outline: 0px;
    }
    @media screen and (max-width: 768px) {
        width: 70%;
    }
    @media screen and (max-width: 480px) {
        width: 90%;
    }
`

export const Error = styled.span`
    color: red;
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