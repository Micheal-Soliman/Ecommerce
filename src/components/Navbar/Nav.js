import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLength } from '../../redux/cartSlice'
import { NavLink, Container, Left,NavLogoLink, CartLink,Logo, Center, Right, Bar, Cart, Num, NavBtnLink, Caret,menuMobile,CaretMenuStyle, MenuCaret, CaretLink } from './NavStyle'
function Nav() {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [showCaret, setshowCaret] = useState(false)
    const [style, setStyle] = useState()
    const [styleCaret, setStyleCaret] = useState()
    const [size, setSize] = useState()
    const [LOC1, setLOC1] = useState()
    const [LOC2, setLOC2] = useState()
    const [lengthCart, setLengthCart] = useState()
    const {numberItems} = useSelector((state)=> state.cart)
    const Username = sessionStorage.getItem('sign')
    useEffect(()=>{
        fetch(`https://localhost:5001/api/carts/count/${Username}`)
        .then(response=>response.json())
        .then(json=>setLengthCart(json))
    },[])
    // useEffect(()=>{
    //     dispatch(getLength(numberItems))
    // },[])
    
    let Sellername = sessionStorage.getItem('Sellername');
    
    useEffect(()=>{
        if (Sellername) {
            setLOC1('sellerhome')
            setLOC2('addproduct')
        } else {
            setLOC1('sellersignin')
            setLOC2('sellersignin')
        }   
    },[Sellername])
   



    const showMenu = () =>{
        if (show == true) {        
            setStyle(menuMobile)
        }else{
            setStyle()
        }
    }
    useEffect(showMenu,[show])    

    const showCaretMenu = () =>{
        if (showCaret == true) {        
            setStyleCaret(CaretMenuStyle)
        }else{
            setStyleCaret()
        }
    }
    useEffect(showCaretMenu,[showCaret])    

    useEffect(()=>{
        if (window.innerWidth > 768) {
            setShow(false)
            setshowCaret(false)
        }
    },[window.innerWidth])    

    function handleResize() {
        setSize(window.innerWidth)
        if (size > 768) {
            setShow(false)
            setshowCaret(false)
        }
  }
  window.addEventListener('resize', handleResize)
  return (
        <Container>
                <Left> 
                    <NavLogoLink onClick={()=>{setShow(false)}} to="/Ecommerce/"><Logo /></NavLogoLink>                 
                </Left>
                <Center style={style}>
                    <NavLink  onClick={()=>{setShow(false)}}  to='/Ecommerce'>Home</NavLink>
                    <NavLink  onClick={()=>{setShow(false)}}  to='/products'>Products</NavLink>
                    <NavLink  onClick={()=>{setShow(false)}}  to='/about'>About</NavLink>
                    <NavLink  onClick={()=>{setShow(false)}}  to='/contact'>Contact</NavLink>
                    <CartLink  onClick={()=>{setShow(false)}} to='/cart'>Cart({numberItems})</CartLink>
                    <CartLink  onClick={()=>{setShow(false)}} to='/signup'>Signup</CartLink>
                    <CartLink  onClick={()=>{setShow(false)}} to='/signin'>Signin</CartLink>
                    <CartLink  onClick={()=>{setShow(false)}} to={`/${LOC1}`}>Seller Home</CartLink>
                    <CartLink  onClick={()=>{setShow(false)}} to={`/${LOC2}`}>Add Product</CartLink>
                </Center>
                <Right>
                    <NavBtnLink to='/cart'>
                        <Cart />
                        <Num>{lengthCart + numberItems}</Num> 
                    </NavBtnLink>
                    <Bar onClick={()=>setShow(!show)}/>
                    <Caret onClick={()=>setshowCaret(!showCaret)}/>
                    <MenuCaret style={styleCaret}>
                        <CaretLink  onClick={()=>{setshowCaret(false)}} to='/signup'>Sign up</CaretLink>
                        <CaretLink  onClick={()=>{setshowCaret(false)}} to='/signin'>Sign in</CaretLink>
                        <CaretLink  onClick={()=>{setshowCaret(false)}} to='/sellersignin'>Seller</CaretLink>
                    </MenuCaret>
                </Right>
        </Container>
  )
}

export default Nav