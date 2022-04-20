import styled from 'styled-components'


export const Wrapper = styled.div`
    min-height: calc(100vh - 240px);
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
        min-height: calc(100vh - 233px);
    }
    @media screen and (max-width: 320px){
        grid-template-columns: repeat(1, 280px);
    }
`

export const H2 = styled.div`
    margin-top: 40px;
    font-size: 30px;
    letter-spacing: 2px;
    font-weight: 500;
    @media screen and (max-width: 480px){
        font-size: 25px;
    }
`

export const Button = styled.button`  
    
`

export const style = {
    position:'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    letterSpacing: '2px',
    textAlign: 'center',
}