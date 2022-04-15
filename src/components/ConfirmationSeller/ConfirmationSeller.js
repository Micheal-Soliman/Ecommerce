import React, { useRef, useState } from 'react'
import {Container, Form, Input, Box, Text,Button, H1, Title, NavLink, BoxLinks, Error, TitlePage} from './ConfirmationSellerStyle'

function ConfirmationSeller() {
    const confirmCodeInput = useRef()
    const [confirmCode, setConfirmCode] = useState('')
    const [responseRequest, setResponseRequest] = useState('')
    const [E1, setE1] = useState('')
    const [style, setStyle] = useState()
    const Username = sessionStorage.getItem('signSeller');    
    // console.log(responseRequest) 
    // useEffect(()=>{
    //     if (/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/.test(confirmCode)) {
    //         setE1('Please Enter Letters And Number And Underscroe And Dash Line Only')
    //         setAccept1(false)
    //     }else if (confirmCode.length > 30) {
    //         setE1('Please Enter Word Contains 30 Letters Only')
    //         setAccept1(false)
    //     }else{
    //         setAccept1(true)
    //         setE1('')
    //         setE3('')
    //     }
    // },[confirmCode])
    
    const handleClick = (x) =>{
        x.preventDefault();
        fetch(`https://localhost:5001/api/Vendors/Verify/${Username}/${confirmCode}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            }) 
            .then(function(response) {
                 return  response.text().then(function(text) {
                  setResponseRequest(text)
                });
              });
        if ( responseRequest == Username) {
            setE1('')
            setStyle({
                display: 'block'
            })
            confirmCodeInput.current.value = ''
            window.location.href = `/sellerhome`
        } else if(responseRequest != '') {
            setE1('Enter Your Confirm Code Again')
        }      
    }
  return (
    <Container>
        <TitlePage>Confirmation Page</TitlePage>
        <H1 style={style}>Welcome {Username}</H1>
        <Form onSubmit={handleClick}>
            <Box>
                <Text onClick={() => confirmCodeInput.current.focus()}>Confirm Code</Text>
                <Input placeholder='Write Your Confirm Code' required onFocus={()=> setStyle({display: 'none'})} type='number' ref={confirmCodeInput} onChange={(x)=> setConfirmCode(x.target.value)}/>
                <Error>{E1}</Error>
            </Box>
            <Button type='submit' value='Submit'/>          
        </Form>
    </Container>
  )
}

export default ConfirmationSeller