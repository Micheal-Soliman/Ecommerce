import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
import { buyProduct, getProduct } from '../../redux/productSlice'
import {Container, H2,Card, Image, Box, Title, Price, NavLink, Button, ShowMore, Buttons, Wrapper} from './HomeStyle'
import Slider from '../Slider/Slider'

function Home() {
    const {Data} = useSelector((state)=> state.product)
    const {statue} = useSelector((state)=> state.product)
    const dispatch = useDispatch()
    const [style, setStyle] = useState()
    useEffect(()=> dispatch(getProduct()),[])
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
    useEffect(()=>{
        if (Data.length) {
            setStyle()
        }else{
            setStyle({
                background: 'white'
            })
        }
    },[statue])
    return (
        <>   
            <Slider />
            <Container style ={style}>
                {Data.length ?<H2>Some of products</H2>:null}
                <Wrapper>
                    {Data.length ? (Data.slice(0,10).map((i) => {
                        return (
                            <Card key={i.id}>
                                <Image src={i.image} alt="Background"/>
                                <Box>
                                    <Title>{i.title}</Title>
                                    <Price><sup>$</sup>{i.price}</Price>
                                    <Buttons>
                                        <NavLink to={`/Ecommerce/products/${i.id}`}>Show More</NavLink>
                                        <Button onClick={()=>{dispatch(addProduct({id: i.id, image: i.image, title: i.title, price: i.price, count:1}))
                                         dispatch(buyProduct(i))}}>Buy</Button>
                                    </Buttons>   
                                </Box>
                            </Card>
                        )   
                    })) : statue && Loading }
                </Wrapper>
                {Data.length ? <ShowMore to='/products' onClick={()=> window.scrollTo(0)}> Show All</ShowMore> : null}           
            </Container>
        </>
    )
}

export default Home