import styled from 'styled-components'

const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'

export const Container = styled.div`
    background: ${thirdColor};
    height: calc(100vh - 135px);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const H1 = styled.h2`
    display: none;
    width: 80vw;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 768px) {
        font-size: 15px;
        font-weight: unset;
    }

`
export const Form = styled.form`
    width: 50vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 992px) {
        width: 60vw;
    }
    @media screen and (max-width: 768px) {
        width: 70vw;
    }
`
export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
    width: 100%;

`
export const Text = styled.label`
    flex:1;
    font-size: 20px;
    text-align: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const Input = styled.input`
    border: 1px solid ${mainColor};
    height: 25px;
    flex:2;
    font-size: 18px;
    &:focus {
        outline: 0px;
    }
    ::placeholder{
        color: black;
        opacity: 40%;
    }

`
export const Request = styled.textarea`
    resize: none;
    border: 1px solid ${mainColor};
    flex:2;
    &:focus {
        outline: 0px;
    }
    height: 50px;
    font-size: 18px;
    ::placeholder{
        color: black;
        opacity: 40%;
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