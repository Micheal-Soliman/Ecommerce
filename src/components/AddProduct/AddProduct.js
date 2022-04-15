import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addSellerOldProducts, addSellerProducts, getSellerProducts} from '../../redux/sellerSlice'
import Dashboard from '../Dashboard/Dashboard'
import {Container} from '../SellerHome/SellerHomeStyle'
import {Wrapper, Form, SelectProduct, Box, TextBox,Text,Input, BoxBtn,Button, NavLink, Error} from './AddProductStyle'

function AddProduct() {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [E1, setE1] = useState('')
    const refName = useRef()
    const refQuantity = useRef()
    const dispatch = useDispatch()
    // useEffect(()=>{dispatch(getSellerProducts())},[])
    // const {Data} = useSelector((state)=>state.seller)
    // const {statue} = useSelector((state)=>state.seller)
    const [Data, setData] = useState([])
    const username = sessionStorage.getItem('signSeller')
    useEffect(()=>{
        fetch(`https://localhost:5001/api/Vendors/vendorModels/${username}`)
        .then(response=>response.json())
        .then(json=>setData(json))
    },[])
    const handleClick = (x) =>{
        x.preventDefault();
        if (name === '') {
            setE1('Select Product Please')
        } else {
            dispatch(addSellerOldProducts({name, quantity}))
            refName.current.value = ''
            refQuantity.current.value = ''
            setE1('')
        }
    }
    // console.log(Data)
  return (
    <Container>
        <Dashboard/>
        <Wrapper>
            <Form onSubmit={handleClick}>
                <Box>
                    <TextBox>
                        <Text onClick={() => refName.current.focus()}>Name</Text>
                    </TextBox>
                    <SelectProduct required onChange={(x)=>setName(x.target.value)} ref={refName}>
                        <option value='' >Select The Product</option>
                        {Data.map((i)=>{
                            return(
                                <option key={Math.random()} value={i.name} > {i.name}</option>
                            )
                        })}
                    </SelectProduct> 
                    <Error>{E1}</Error>
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