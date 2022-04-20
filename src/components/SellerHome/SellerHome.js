import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSellerProducts } from '../../redux/sellerSlice'
import Dashboard from '../Dashboard/Dashboard'
import {Container, ContainerWrapper, Wrapper} from './SellerHomeStyle'
import{Card, Image, Box, Title, Price, ImageContainer} from '../Home/HomeStyle'

function SellerHome() {
    const dispatch = useDispatch()
    const [Data, setData] = useState([])
    const username = sessionStorage.getItem('signSeller')
    useEffect(()=>{
        fetch(`https://localhost:5001/api/Vendors/vendorModels/${username}`)
        .then(response=>response.json())
        .then(json=>setData(json))
    },[])
    // useEffect(()=>{dispatch(getSellerProducts())},[])
    // const {Data} = useSelector((state)=>state.seller)
    // const {statue} = useSelector((state)=>state.seller)
    console.log(Data)
    const Loading = 
    <div style={{
        position:'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
            <span style={{fontSize: '25px', marginRight:'10px'}}>Loading</span>
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
           </div>
    </div>
  return (
    <Container>
        <Dashboard/>
        <ContainerWrapper>
            <Wrapper>
                        {Data.map((i) => {
                            return (
                                <Card key={Math.random()}>
                                    <ImageContainer>
                                        <Image src={i.imagePath} alt="Background"/>
                                    </ImageContainer>
                                    <Box>
                                        <Title>{i.name}</Title>
                                        <Price><sup>$</sup>{i.price}</Price>
                                    </Box>
                                </Card>
                            )   
                        })}
            </Wrapper>
        </ContainerWrapper>
    </Container>
  )
}

export default SellerHome