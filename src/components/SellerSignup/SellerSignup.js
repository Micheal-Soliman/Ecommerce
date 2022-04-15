import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enterUser, enterVendor, getProductUser } from '../../redux/signinSlice'
import {Container, Form, Input, Box, Text,Button, H1, Title, NavLink, BoxLinks, Error, TitlePage} from './SellerSignupStyle'
function SellerSignup() {
    const dispatch = useDispatch()
    const NameInput = useRef()
    const UsernameInput = useRef()
    const PassInput = useRef()
    const CountryInput = useRef()
    const CityInput = useRef()
    const EmailInput = useRef()
    const PhoneInput = useRef()
    const [Name, setName] = useState('')
    const [Username, setUsername] = useState('')
    const [Pass, setPass] = useState('')
    const [Country, setCountry] = useState('')
    const [City, setCity] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [E1, setE1] = useState('')
    const [E2, setE2] = useState('')
    const [E3, setE3] = useState('')
    const [E4, setE4] = useState('')
    const [E5, setE5] = useState('')
    const [E6, setE6] = useState('')
    const [E7, setE7] = useState('')
    const [E8, setE8] = useState('')
    const [style, setStyle] = useState()
    const [accept1, setAccept1] = useState(true)
    const [accept2, setAccept2] = useState(true)
    const [accept3, setAccept3] = useState(true)
    const [accept4, setAccept4] = useState(true)
    const [accept5, setAccept5] = useState(true)
    const [accept6, setAccept6] = useState(true)
    const [accept7, setAccept7] = useState(true)

    useEffect(()=>{
        if (/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/.test(Name)) {
            setE1('Please Enter Letters And Number And Underscroe And Dash Line Only')
            setAccept1(false)
        }else if (Name.length > 30) {
            setE1('Please Enter Word Contains 30 Letters Only')
            setAccept1(false)
        }else{
            setAccept1(true)
            setE1('')
            setE8('')
        }
    },[Name])

    useEffect(()=>{
        if (/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/.test(Username)) {
            setE2('Please Enter Letters And Number And Underscroe And Dash Line Only')
            setAccept2(false)
        }else if (Username.length > 30) {
            setE2('Please Enter Word Contains 30 Letters Only')
            setAccept2(false)
        }else{
            setAccept2(true)
            setE2('')
            setE8('')
        }
    },[Username])
    
    useEffect(()=>{
        if (/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/.test(Pass)) {
            setE3('Please Enter Letters And Number And Underscroe And Dash Line Only')
            setAccept3(false)
        }else if (Pass.length > 30) {
            setE3('Please Enter Word Contains 30 Letters Only')
            setAccept3(false)
        }else{
            setAccept3(true)
            setE3('')
            setE8('')
        }
    },[Pass])
    
    useEffect(()=>{
        if (/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/.test(Country)) {
            setE4('Please Enter Letters And Number And Underscroe And Dash Line Only')
            setAccept4(false)
        }else if (Country.length > 30) {
            setE4('Please Enter Word Contains 30 Letters Only')
            setAccept4(false)
        }else{
            setAccept4(true)
            setE4('')
            setE8('')
        }
    },[Country])

    useEffect(()=>{
        if (/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/.test(City)) {
            setE5('Please Enter Letters And Number And Underscroe And Dash Line Only')
            setAccept5(false)
        }else if (City.length > 30) {
            setE5('Please Enter Word Contains 30 Letters Only')
            setAccept5(false)
        }else{
            setAccept5(true)
            setE5('')
            setE8('')
        }
    },[City])

    useEffect(()=>{
        if (/[`!#$%^&*()+\=\[\]{};':"\\|,<>\/?~]/.test(Email)) {
            setE6('Please Enter Letters And Number And Underscroe And Dash Line Only')
            setAccept6(false)
        }else if (Email.length > 60) {
            setE6('Please Enter Word Contains 30 Letters Only')
            setAccept6(false)
        }else{
            setAccept6(true)
            setE6('')
            setE8('')
        }
    },[Email])

    useEffect(()=>{
        if (Phone.toString() != '') {
            if ( Phone.toString().length != 11 ) {
                setE7('Number Phone Must Have 11 Numbers')
                setAccept7(false)
            }else{
                setAccept7(true)
                setE7('')
                setE8('')
            }
        }
    },[Phone])

    const handleClick = (x) =>{
        x.preventDefault();
        if (accept1 == true && accept2 == true && accept3 == true && accept4 == true && accept5 == true && accept6 == true && accept7 == true) {
            setE8('')
            sessionStorage.setItem('signSeller', `${Username}`);
            dispatch(enterVendor({"username": Username, "name": Name, "country": Country, "city": City, "phone": Phone, "email":Email, "password": Pass}))
            setStyle({
                display: 'block'
            })
            NameInput.current.value = ''
            UsernameInput.current.value = ''
            PassInput.current.value = ''
            CountryInput.current.value = ''
            CityInput.current.value = ''
            EmailInput.current.value = ''
            PhoneInput.current.value = ''
            window.location.href = `/confirmseller`
        } else {
            setE8('Try Again')
        }
    }
  return (
    <Container>
        <TitlePage>Sign up Page</TitlePage>
        <Title>{E8}</Title>
        <H1 style={style}>Welcome {Username}</H1>
        <Form onSubmit={handleClick}>
            <BoxLinks>
                <NavLink to='/sellersignin'>Sign in</NavLink>
                <NavLink to='/sellersignup'>Sign up</NavLink>
            </BoxLinks>
            <Box>
                <Text onClick={() => NameInput.current.focus()}>Name</Text>
                <Input placeholder='Write Your Name' required onFocus={()=> setStyle({display: 'none'})} type='text' ref={NameInput} onChange={(x)=> setName(x.target.value)}/>
                <Error>{E1}</Error>
            </Box>
            <Box>
                <Text onClick={() => UsernameInput.current.focus()}>Username</Text>
                <Input placeholder='Write Your Username' required onFocus={()=> setStyle({display: 'none'})} type='text' ref={UsernameInput} onChange={(x)=> setUsername(x.target.value)}/>
                <Error>{E2}</Error>
            </Box>
            <Box>
                <Text onClick={() => PassInput.current.focus()}>Password</Text>
                <Input placeholder='Write Your Password' required onFocus={()=> setStyle({display: 'none'})} type='password' ref={PassInput} onChange={(x)=> setPass(x.target.value)}/>
                <Error>{E3}</Error>
            </Box>
            <Box>
                <Text onClick={() => CountryInput.current.focus()}>Country</Text>
                <Input placeholder='Write Your Country' required onFocus={()=> setStyle({display: 'none'})} type='text' ref={CountryInput} onChange={(x)=> setCountry(x.target.value)}/>
                <Error>{E4}</Error>
            </Box>
            <Box>
                <Text onClick={() => CityInput.current.focus()}>City</Text>
                <Input placeholder='Write Your City' required onFocus={()=> setStyle({display: 'none'})} type='text' ref={CityInput} onChange={(x)=> setCity(x.target.value)}/>
                <Error>{E5}</Error>
            </Box>
            <Box>
                <Text onClick={() => EmailInput.current.focus()}>Email</Text>
                <Input placeholder='Write Your Email' required onFocus={()=> setStyle({display: 'none'})} type='email' ref={EmailInput} onChange={(x)=> setEmail(x.target.value)}/>
                <Error>{E6}</Error>
            </Box>
            <Box>
                <Text onClick={() => PhoneInput.current.focus()}>Phone</Text>
                <Input placeholder='Write Your Phone' required onFocus={()=> setStyle({display: 'none'})} type='number' ref={PhoneInput} onChange={(x)=> setPhone(x.target.value)}/>
                <Error>{E7}</Error>
            </Box>
            <Button type='submit' value='Submit'/>          
        </Form>
    </Container>
  )
}

export default SellerSignup