import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components'
import { FaAmazon, FaBars, FaCartPlus } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsCart} from 'react-icons/bs';
const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'
const heightNav = '85px'
export const Container = styled.div`
    min-height: ${heightNav};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 12;
    background:${mainColor};
`
export const Left = styled.div`
    flex: 1;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const NavLogoLink = styled(Link)`
`
export const Logo = styled(FaAmazon)`
    font-size: 30px;
    color: ${thirdColor}
`
export const Center = styled.div`
    flex: 2;
    min-height: ${heightNav};
    display: flex;
    @media screen and (max-width: 768px){
      display: none;
    }
`
export const NavLink = styled(Link)`
  color: ${thirdColor};
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 2px;
  transition: 0.3s;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  &:hover {
    color: ${secondColor};
    border-bottom: 2px solid ${secondColor};
  }
  &.active {
    color: ${secondColor};
    border-bottom: 2px solid ${secondColor};
  }
  @media screen and (max-width: 768px) {
    color: ${secondColor};
    margin-left: 0px;
    justify-content: flex-start;
    padding: 20px 0px 20px 80px;
    transition: 0.3s;
    :not(:last-child){
      border-bottom: 1px solid ${secondColor};
    }
    &:hover {
      padding-left: 120px;
      :last-child{
        border-bottom: 0px;
      }
    }
    &.active {
      padding-left: 80px;
      color: ${mainColor};
      :last-child{
        border-bottom: 0px;
      }
    }
  }
`
export const CartLink = styled(Link)`
color: ${thirdColor};
font-size: 15px;
text-decoration: none;
cursor: pointer;
font-weight: 500;
letter-spacing: 2px;
transition: 0.3s;
flex: 1;
display: flex;
justify-content: center;
align-items: center;
margin-left: 4px;
&:hover {
  color: ${secondColor};
  border-bottom: 2px solid ${secondColor};
}
&.active {
  color: ${secondColor};
  border-bottom: 2px solid ${secondColor};
}
@media screen and (max-width: 768px) {
  color: ${secondColor};
  margin-left: 0px;
  justify-content: flex-start;
  padding: 20px 0px 20px 80px;
  transition: 0.3s;
  :not(:last-child){
    border-bottom: 1px solid ${secondColor};
  }
  &:hover {
    padding-left: 120px;
    :last-child{
      border-bottom: 0px;
    }
  }
  &.active {
    padding-left: 80px;
    color: ${mainColor};
    :last-child{
      border-bottom: 0px;
    }
  }
}
@media screen and (min-width: 768px) {
    display: none;
}
`
export const Right = styled.div`
    flex: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const NavBtnLink = styled(Link)`
    position: relative;
    display: flex;
    color: ${thirdColor};
    font-size: 42px;
    &:hover {
      color: ${thirdColor};
    }
    @media screen and (max-width: 768px){
      display: none;
    }
`
export const Cart = styled(BsCart)`   
    
`
export const Num = styled.span`
    font-size: 15px;
    font-weight: 500;
    background: ${thirdColor};
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    right: -5px;
    top: -4px;
    color: ${secondColor};
`
export const Bar = styled(FaBars)`
    display: none;
    color: ${thirdColor};
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      font-size: 30px;
      cursor: pointer;
    }
`
export const Caret = styled(AiFillCaretDown)`   
    margin-left: 20px;
    cursor: pointer;
    @media screen and (max-width: 768px){
      display: none;
    }
`
export const MenuCaret = styled.div`
    display:none;
`
export const CaretLink = styled(Link)`
    color: ${thirdColor};
    text-decoration: none;
    text-align: center;
    margin: 10px 0px;
    &:hover{
      color: ${thirdColor};
    }
`

export const menuMobile = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '85px',
    zIndex: '100',
    background: '#efefeff7',
    width: '100%',
    height: 'auto',
    boxShadow: '0 10px 15px rgb(0 0 0 / 40%)',
}
export const CaretMenuStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '65px',
    right: '5px',
    borderRadius: '10px',
    zIndex: '100',
    background: `${mainColor}`,
    width: '75%',
    height: 'auto',
    boxShadow: '0 10px 15px rgb(0 0 0 / 40%)',
}
