import styled from 'styled-components'
const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'

export const Container = styled.div`
    height: calc(100vh - 135px);
    background: ${thirdColor};
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        padding: 0px;
    }
`
export const Box = styled.div`
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
export const ContainerImg = styled.div`
    text-align: center;
`
export const Image = styled.img`
    width: 240px;
    height: 240px; 
    @media screen and (max-width: 768px){
        width: 180px;
        height: 180px;
        margin-bottom: 8px;
    }
    @media screen and (max-width: 600px){
        display:none;
    }
`
export const BoxProduct = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px 25px;
    width: 500px;
    @media screen and (max-width: 768px){
        width: auto;
    }
`
export const Item = styled.div`
    text-transform: capitalize;
    margin: 10px 0px;
    line-height: 24px;
    @media screen and (max-width: 768px){
        margin: 5px 0px;
        line-height: unset;
    }
    @media screen and (max-width: 320px){
        margin: 2px 0px;
        line-height: unset;
    }
`
export const ItemButton = styled.div`
    text-align: center;
    @media screen and (max-width: 480px){
        margin-top: 20px;
    }
    @media screen and (max-width: 320px){
        margin-top: 0px;
    }
`
export const Button = styled.button`
    border: 2px solid ${mainColor};
    padding: 10px 50px;
    border-radius: 20px;
    width: fit-content;
    background: ${mainColor};
    cursor: pointer;
    color: white;
    font-size: 16px;
    letter-spacing: 2px;
    &:active{
        background: white;
        color: ${mainColor};
    }
`