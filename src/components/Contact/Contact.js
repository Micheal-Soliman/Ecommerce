import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRequest } from '../../redux/contactSlice'
import {Container, Form, Input, Request, Box, Text, Button, H1, Title, Error} from './ContactStyle'
function Contact() {
    const dispatch = useDispatch()
    const NameInput = useRef()
    const EmailInput = useRef()
    const RequestInput = useRef()
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Report, setReport] = useState('')
    const [E1, setE1] = useState('')
    const [E2, setE2] = useState('')
    const [E3, setE3] = useState('')
    const [E4, setE4] = useState('')
    const [style, setStyle] = useState()
    const [accept1, setAccept1] = useState(true)
    const [accept2, setAccept2] = useState(true)
    const [accept3, setAccept3] = useState(true)
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
            setE4('')
        }
    },[Name])

    useEffect(()=>{
        if (/[`!#$%^&*()+\=\[\]{};':"\\|,<>\/?~]/.test(Email)) {
            setE2('Please Enter Letters And Number And Underscroe And Dash Line Only')
            setAccept2(false)
        }else if (Email.length > 30) {
            setE2('Please Enter Word Contains 30 Letters Only')
            setAccept2(false)
        }else{
            setAccept2(true)
            setE2('')
            setE4('')
        }
    },[Email])

    useEffect(()=>{
        if (/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/.test(Report)) {
            setE3('Please Enter Letters And Number And Underscroe And Dash Line Only')
            setAccept3(false)
        }else if (Report.length > 30) {
            setE3('Please Enter Word Contains 30 Letters Only')
            setAccept3(false)
        }else{
            setAccept3(true)
            setE3('')
            setE4('')
        }
    },[Report])

    const handleClick = (x) =>{
        x.preventDefault();
        if (accept1 == true && accept2 == true && accept3 == true) {
            setE4('')
            dispatch(addRequest({Name, Email, Report}))
            setStyle({
                display: 'block'
            })
            NameInput.current.value = ''
            EmailInput.current.value = ''
            RequestInput.current.value = ''
        } else {
            setE4('Try Again')
        }

    }
    
  return (
    <Container>
        <Title>{E4}</Title>
        <H1 style={style}>Thank you {Name}, we will contact with you through 24 hours</H1>
        <Form onSubmit={handleClick}>
            <Box>
                <Text onClick={() => NameInput.current.focus()}>Name</Text>
                <Input placeholder='Write Your Name' required onFocus={()=> setStyle({display: 'none'})} type='text' ref={NameInput} onChange={(x)=> setName(x.target.value)}/>
                <Error>{E1}</Error>
            </Box>
            <Box>
                <Text onClick={() => EmailInput.current.focus()}>Email</Text>
                <Input placeholder='Write Your Email' required onFocus={()=> setStyle({display: 'none'})} type='email' ref={EmailInput} onChange={(x)=> setEmail(x.target.value)}/>
                <Error>{E2}</Error> 
            </Box>
            <Box>
                <Text onClick={() => RequestInput.current.focus()}>Request</Text>
                <Input placeholder='Write Your Request' required onFocus={()=> setStyle({display: 'none'})} type='text' ref={RequestInput} onChange={(x)=> setReport(x.target.value)}/>
                <Error>{E3}</Error>
            </Box>
            <Button type='submit' value='Submit'/>          
        </Form>
    </Container>
  )
}

export default Contact
