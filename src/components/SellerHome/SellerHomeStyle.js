import styled from 'styled-components'


export const Container = styled.div`
    min-height: calc(100vh - 135px);
    display: flex;
`
export const ContainerWrapper = styled.div`
    width: 100%;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(2, auto);
    }
    // @media screen and (max-width: 1024px){
    //     grid-template-columns: repeat(1, auto);
    // }
    @media screen and (max-width: 900px){
        grid-template-columns: repeat(1, auto);
    }
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, auto);
    }
    @media screen and (max-width: 600px){
        grid-template-columns: repeat(1, auto);
    }
    @media screen and (max-width: 480px){
        grid-template-columns: repeat(1, auto);
    }
    @media screen and (max-width: 320px){
        grid-template-columns: repeat(1, auto);
    }
`