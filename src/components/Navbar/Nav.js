import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Container, Left,NavLogoLink, CartLink,Logo, Center, Right, Bar, Cart, Num, NavBtnLink, menuMobile } from './NavStyle'
function Nav() {

    const [show, setShow] = useState(false)
    const [style, setStyle] = useState()
    const [size, setSize] = useState()
    const {numberItems} = useSelector((state)=> state.cart)

    const showMenu = () =>{
        if (show == true) {        
            setStyle(menuMobile)
        }else{
            setStyle()
        }
    }
    useEffect(showMenu,[show])    
    useEffect(()=>{
        if (window.innerWidth > 768) {
            setShow(false)
        }
    },[window.innerWidth])    
    function handleResize() {
        setSize(window.innerWidth)
        if (size > 768) {
            setShow(false)
        }
  }
  window.addEventListener('resize', handleResize)
  return (
        <Container>
                <Left> 
                    <NavLogoLink onClick={()=>{setShow(false)}} to="/Ecommerce/"><Logo /></NavLogoLink>                 
                </Left>
                <Center style={style}>
                    <NavLink activeStyle onClick={()=>{setShow(false)}}  to="/Ecommerce">Home</NavLink>
                    <NavLink activeStyle onClick={()=>{setShow(false)}}  to="/products">Products</NavLink>
                    <NavLink activeStyle onClick={()=>{setShow(false)}}  to="/about">About</NavLink>
                    <NavLink activeStyle onClick={()=>{setShow(false)}}  to="/contact">Contact</NavLink>
                    <CartLink activeStyle onClick={()=>{setShow(false)}} to='/cart'>Cart({numberItems})</CartLink>
                </Center>
                <Right>
                    <NavBtnLink to='/cart'>
                        <Cart />
                        <Num>{numberItems}</Num> 
                    </NavBtnLink>
                    <Bar onClick={()=>setShow(!show)}/>
                </Right>
        </Container>
  )
}

export default Nav