import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'

export const DashMenu = styled.div`
    display: flex;
    flex-direction: column;
    background: ${thirdColor};
    min-width: 200px;
    border-right: 1px solid ${mainColor};
    @media screen and (max-width: 768px){
        display:none
    }
`
export const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 20px;
    text-align: center;
    &:hover{
        color: black;
    }
    :not(:last-child){
        border-bottom: 1px solid ${mainColor};
      }
`