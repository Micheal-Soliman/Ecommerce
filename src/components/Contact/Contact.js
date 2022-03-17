import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRequest } from '../../redux/contactSlice'
import {Container, Form, Input, Request, Box, Text, Button, H1} from './ContactStyle'
function Contact() {
    const dispatch = useDispatch()
    const NameInput = useRef()
    const EmailInput = useRef()
    const RequestInput = useRef()
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Report, setReport] = useState('')
    const [style, setStyle] = useState()
    const [accept, setAccept] = useState(true)
    useEffect(()=>{
        if (/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/.test(Name)) {
            alert('Please Enter Letters And Number And Underscroe And Dash Line Only')
            setAccept(false)
        }else if (Name.length > 30) {
            alert('Please Enter Word Contains 30 Letters Only')
            setAccept(false)
        }else{
            setAccept(true)
        }
    },[Name])

    const handleClick = (x) =>{
        x.preventDefault();
        if (accept == true) {
            dispatch(addRequest({Name, Email, Report}))
            setStyle({
                display: 'block'
            })
            NameInput.current.value = ''
            EmailInput.current.value = ''
            RequestInput.current.value = ''
        } else {
            alert('Try Again')
        }

    }
    
  return (
    <Container>
        <H1 style={style}>Thank you {Name}, we will contact with you through 24 hours</H1>
        <Form onSubmit={handleClick}>
            <Box>
                <Text onClick={() => NameInput.current.focus()}>Name</Text>
                <Input placeholder='Write Your Name' required onFocus={()=> setStyle({display: 'none'})} type='text' ref={NameInput} onChange={(x)=> setName(x.target.value)}/>
            </Box>
            <Box>
                <Text onClick={() => EmailInput.current.focus()}>Email</Text>
                <Input placeholder='Write Your Email' required onFocus={()=> setStyle({display: 'none'})} type='email' ref={EmailInput} onChange={(x)=> setEmail(x.target.value)}/>
            </Box>
            <Box>
                <Text onClick={() => RequestInput.current.focus()}>Request</Text>
                <Request placeholder='Write Your Request' required onFocus={()=> setStyle({display: 'none'})} ref={RequestInput} onChange={(x)=> setReport(x.target.value)} />
            </Box>
            <Button type='submit' value='Submit'/>          
        </Form>
    </Container>
  )
}

export default Contact