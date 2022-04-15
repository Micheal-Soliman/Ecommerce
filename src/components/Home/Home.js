import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, getCart } from '../../redux/cartSlice'
import {  getProduct } from '../../redux/productSlice'
import {Container, H2,Card, Image, Box, Title, Price, NavLink, Button, ShowMore, Buttons, Wrapper} from './HomeStyle'
import Slider from '../Slider/Slider'
import { useParams } from 'react-router-dom'

function Home() {

    // const user = useParams()
    // const[data, setData] = useState([])
    // useEffect(()=>{
    //     if (user.email) {
    //         fetch(`https://fakestoreapi.com/carts/user/${user.email}`)
    //         .then(res=>res.json())
    //         .then(json=>setData(json)) 
    //     }
    // },[user.email])
    // console.log(data[0])

    // const {someData} = useSelector((state)=> state.product)
    // const {statue} = useSelector((state)=> state.product)
    const[someData, setSomeData] = useState([])
    useEffect(()=>{
        fetch(`https://localhost:5001/api/models/GetAllOrderdByRate/10`)
        .then(res=>res.json())
        .then(json=>setSomeData(json)) 
    },[])
    const dispatch = useDispatch()
    const [style, setStyle] = useState()
    const [responseRequest, setResponseRequest] = useState('')
    let Username = sessionStorage.getItem('sign');      
    const{list} = useSelector((state)=> state.cart)

    // useEffect(async()=>{
    //     if (Username && list.length == 0) {
    //         await fetch(`https://fakestoreapi.com/products/${Username}`)
    //         .then(res=>res.json())
    //         .then(json=>dispatch(getCart({id: json.id, image: json.image, title: json.title, price: json.price, count: 1})))
    //         fetch('https://fakestoreapi.com/products?limit=5')
    //         .then(res=>res.json())
    //         .then(json=>        
    //             json.filter((index)=>{
    //             dispatch(getCart({id: index.id, image: index.image, title: index.title, price: index.price, count:1}))
    //         }))
    //     }
    // },[])

    // useEffect(()=> dispatch(getProduct()),[])
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
        if (someData.length) {
            setStyle()
        }else{
            setStyle({
                background: 'white'
            })
        }
    },[someData.length])
    return (
        <>   
            <Slider />
            <Container style ={style}>
                {someData.length ?<H2>Some of products</H2>:null}
                <Wrapper>
                    {someData.length ? (someData.map((i) => {
                        return (
                            <Card key={i.id}>
                                <Image src={i.imagePath} alt="Background"/>
                                <Box>
                                    <Title>{i.name}</Title>
                                    <Price><sup>$</sup>{i.price}</Price>
                                    <Title>{sessionStorage.getItem('soldout') == i.name && responseRequest}</Title>
                                    <Buttons>
                                        <NavLink to={`/products/${i.name}`}>Show More</NavLink>
                                        <Button onClick={()=>{
                                                              if (sessionStorage.getItem('sign') === null) {
                                                                  window.location.href = `/signin`
                                                              } else if (i.name){
                                                                  sessionStorage.setItem('soldout',`${i.name}`)
                                                                fetch(`https://localhost:5001/api/carts/add/${Username}/${i.name}`, {
                                                                    method: 'POST',
                                                                    headers: { 'Content-Type': 'application/json' },
                                                                    }) 
                                                                    .then( function(response) {
                                                                      return  response.text().then(function(text) {
                                                                        setResponseRequest(text)
                                                                     });
                                                                   });
                                                                   if (responseRequest == 'Done adding to cart') {
                                                                      dispatch(addProduct())
                                                                   }
                                                                   
                                                 }}}>Add To Cart</Button>
                                    </Buttons>   
                                </Box>
                            </Card>
                        )   
                    })) :  Loading }
                </Wrapper>
                {someData.length ? <ShowMore to='/products' onClick={()=> window.scrollTo(0)}> Show All</ShowMore> : null}           
            </Container>
        </>
    )
}

export default Home