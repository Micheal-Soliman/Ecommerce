import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addSellerProducts, getSellerProducts} from '../../redux/sellerSlice'
import Dashboard from '../Dashboard/Dashboard'
import {Container} from '../SellerHome/SellerHomeStyle'
import {Wrapper, Title,Form, Box, TextBox,Text,Input, Button, Error, SelectProduct} from './AddNewProductStyle'

function AddNewProduct() {
    const [name, setName] = useState('')
    const [imgPath, setImgPath] = useState('')
    const [price, setPrice] = useState('')
    const [sale, setSale] = useState('')
    const [brand, setBrand] = useState('')
    const [color, setColor] = useState('')
    const [category, setCategory] = useState('')
    const [features, setFeatures] = useState('')
    const [quantity, setQuantity] = useState('')
    const sellerName = sessionStorage.getItem('signSeller')
    const [E0, setE0] = useState('')
    const [E1, setE1] = useState('')
    const [E4, setE4] = useState('')
    const [E5, setE5] = useState('')
    const [E6, setE6] = useState('')
    const [E9, setE9] = useState('')
    const [E8, setE8] = useState('')
    const [accept0, setAccept0] = useState(true)
    const [accept1, setAccept1] = useState(true)
    const [accept4, setAccept4] = useState(true)
    const [accept5, setAccept5] = useState(true)
    const [accept6, setAccept6] = useState(true)
    const refName = useRef()
    const refPath = useRef()
    const refPrice = useRef()
    const refSale = useRef()
    const refBrand = useRef()
    const refColor = useRef()
    const refCategory = useRef()
    const refFeatures = useRef()
    const refQuantity = useRef()
    const dispatch = useDispatch()
    useEffect(()=>{
        if (name.length > 300) {
            setE0('Please Enter Word Contains 300 Letters Only')
            setAccept0(false)
        }else{
            setAccept0(true)
            setE0('')
            setE8('')
        }
    },[name])

    useEffect(()=>{
        if (imgPath.length > 512) {
            setE1('Please Enter Word Contains 512 Letters Only')
            setAccept1(false)
        }else{
            setAccept1(true)
            setE1('')
            setE8('')
        }
    },[imgPath])

    useEffect(()=>{
        if (brand.length > 100) {
            setE4('Please Enter Word Contains 100 Letters Only')
            setAccept4(false)
        }else{
            setAccept4(true)
            setE4('')
            setE8('')
        }
    },[brand])

    useEffect(()=>{
        if (color.length > 50) {
            setE5('Please Enter Word Contains 50 Letters Only')
            setAccept5(false)
        }else{
            setAccept5(true)
            setE5('')
            setE8('')
        }
    },[color])

    useEffect(()=>{
        if (features.length > 600) {
            setE6('Please Enter Word Contains 600 Letters Only')
            setAccept6(false)
        }else{
            setAccept6(true)
            setE6('')
            setE8('')
        }
    },[features])
    const handleClick = (x) =>{
        x.preventDefault();
        if (category == '') {
            setE9('Please Select Category')
        }
        else if (accept0 == true && accept1 == true && accept4 == true && accept5 == true && accept6 == true) {
            setE8('')
            dispatch(addSellerProducts({name, imgPath, price, sale, brand, color, category, sellerName,features, quantity}))
            refName.current.value = ''
            refPath.current.value = ''
            refPrice.current.value = ''
            refSale.current.value = ''
            refBrand.current.value = ''
            refColor.current.value = ''
            refFeatures.current.value = ''
            refQuantity.current.value = ''
            window.location.href = `/sellerhome`
        }
         else {
            setE8('Try Again')
        }
    }
  return (
    <Container>
        <Dashboard/>
        <Wrapper>
            <Title>{E8}</Title>
            <Form onSubmit={handleClick}>

                <Box>
                    <TextBox>
                        <Text onClick={() => refName.current.focus()}>Name</Text>
                    </TextBox>
                    <Input type='text' placeholder='Write Your Name' required onChange={(x)=> setName(x.target.value)} ref={refName} />
                    <Error>{E0}</Error>
                </Box>

                <Box>
                    <TextBox>
                        <Text onClick={() => refPath.current.focus()}>Image Url</Text>
                    </TextBox>
                    <Input type='text' placeholder='Write Your Image Url' required onChange={(x)=> setImgPath(x.target.value)} ref={refPath} />
                    <Error>{E1}</Error>

                </Box>

                <Box>
                    <TextBox>
                        <Text onClick={() => refPrice.current.focus()}>Price</Text>
                    </TextBox>
                    <Input type='number' placeholder='Write Your Price' required min={'1'} max={'100000'} onChange={(x)=> setPrice(x.target.value)} ref={refPrice} />
                </Box>

                <Box>
                    <TextBox>
                        <Text onClick={() => refSale.current.focus()}>Sale</Text>
                    </TextBox>
                    <Input type='number' placeholder='Write Your Sale' required min={'1'} max={'100000'} onChange={(x)=> setSale(x.target.value)} ref={refSale} />
                </Box>

                <Box>
                    <TextBox>
                        <Text onClick={() => refBrand.current.focus()}>Brand</Text>
                    </TextBox>
                    <Input type='text' placeholder='Write Your Brand' required onChange={(x)=> setBrand(x.target.value)} ref={refBrand} />
                    <Error>{E4}</Error>
                </Box>

                <Box>
                    <TextBox>
                        <Text onClick={() => refColor.current.focus()}>Color</Text>
                    </TextBox>
                    <Input type='text' placeholder='Write Your Color' required onChange={(x)=> setColor(x.target.value)} ref={refColor} />
                    <Error>{E5}</Error>
                </Box>

                <Box>
                    <TextBox>
                        <Text onClick={() => refCategory.current.focus()}>Category</Text>
                    </TextBox>
                    <SelectProduct required onChange={(x)=>setCategory(x.target.value)} ref={refCategory}>
                        <option value='' >Select The Product</option>
                        <option value='RAM' >RAM</option>
                        <option value='SSD' >SSD</option>
                        <option value="K&M" >KEYBOARD</option>
                        <option value='Mouse' >Mouse</option>
                    </SelectProduct> 
                    <Error>{E9}</Error>
                </Box>

                <Box>
                    <TextBox>
                        <Text onClick={() => refFeatures.current.focus()}>Features</Text>
                    </TextBox>
                    <Input type='text' placeholder='Write Your Features' required onChange={(x)=> setFeatures(x.target.value)} ref={refFeatures} />
                    <Error>{E6}</Error>
                </Box>

                <Box>
                    <TextBox>
                        <Text onClick={() => refQuantity.current.focus()}>Quantity</Text>
                    </TextBox>
                    <Input type='number' placeholder='Write Your Quantity' min={'1'} max={'1000'} onChange={(x)=> setQuantity(x.target.value)} ref={refQuantity} />
                </Box>

                <Button type='submit' value='Submit'/>          
            </Form>

        </Wrapper>
    </Container>
  )
}

export default AddNewProduct