import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addSellerOldProducts, addSellerProducts, getSellerProducts} from '../../redux/sellerSlice'
import Dashboard from '../Dashboard/Dashboard'
import {Container} from '../SellerHome/SellerHomeStyle'
import {Wrapper, Form, SelectProduct, Box, TextBox,Text,Input, BoxBtn,Button, NavLink, Error, BoxSearch, Option, SelectIcon, ValueOption} from './AddProductStyle'

function AddProduct() {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const guess = []
    const [E1, setE1] = useState('')
    const refName = useRef()
    const refQuantity = useRef()
    const dispatch = useDispatch()
    const [Data, setData] = useState([])
    const username = sessionStorage.getItem('signSeller')
    useEffect(()=>{
        fetch(`https://localhost:5001/api/Vendors/vendorModels/${username}`)
        .then(response=>response.json())
        .then(json=>setData(json))
    },[])
    console.log(name)

    const handleClick = (x) =>{
        x.preventDefault();
        dispatch(addSellerOldProducts({name, quantity}))
        refName.current.value = ''
        refQuantity.current.value = ''
        window.location.href = `/sellerhome`
    }
  return (
    <Container>
        <Dashboard/>
        <Wrapper>
            <Form onSubmit={handleClick}>
                <Box>
                    <TextBox>
                        <Text onClick={() => refName.current.focus()}>Name</Text>
                    </TextBox>
                    <Input required placeholder='Write Your Name' value={name} onChange={(x)=>setName(x.target.value)} ref={refName} />
                    <BoxSearch>
                        {Data.filter((i)=>{
                            if (name == '') {
                                return
                            }
                            else if (i.name.toLowerCase().includes(name.toLowerCase())) {
                                return i
                            }
                        }).map((j)=>{
                            return(
                                <Option key={Math.random()}>
                                    <ValueOption>{j.name}</ValueOption>
                                    <SelectIcon onClick={()=>{setName(j.name)}}/>
                                </Option>
                            )
                        })}
                    </BoxSearch>
                </Box>

                <Box>
                    <TextBox>
                        <Text onClick={() => refQuantity.current.focus()}>Quantity</Text>
                    </TextBox>
                    <Input required placeholder='Write Your Quantity' type='number' min={'1'} max={'1000'} onChange={(x)=> setQuantity(x.target.value)} ref={refQuantity} />
                </Box>

                <BoxBtn>
                    <Button type='submit' value='Submit'/>
                    <NavLink to='/addnewproduct'> Add New Product</NavLink>   
                </BoxBtn>       
            </Form>

        </Wrapper>
    </Container>
  )
}

export default AddProduct