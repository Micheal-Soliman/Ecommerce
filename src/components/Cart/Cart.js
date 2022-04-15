import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { buyProduct, deleteProduct, getCart } from '../../redux/cartSlice'
import {Container,Card, Image, Box, Title, Price, NavLink, Button, Buttons} from '../Home/HomeStyle'
import {H2, Wrapper,style} from './CartStyle'

function Cart() {
    const dispatch = useDispatch()
    let Username = sessionStorage.getItem('sign');      
    let {list} = useSelector((state)=> state.cart)
    let {numberItems} = useSelector((state)=> state.cart)
    const [idCart, setIdCart] = useState('')
    useEffect(()=>{
        if (Username && list.length == 0) {
             fetch(`https://localhost:5001/api/carts/InCart/${Username}`)
            .then(res=>res.json())
            .then(json=> json.filter((i)=>{
                dispatch(getCart({id: i.id, model: i.model, clientUsername:i.clientUsername, rate: i.rate, count:1}))
            }))
            // .then(json=>console.log(json))
        }
    },[numberItems])
    // useEffect(()=>{
    //     fetch(`https://localhost:5001/api/carts/get/${Username}`)
    //     .then(res=>res.json())
    //     .then(json=> setIdCart(json.id))
    // },[])
    // console.log(actualList)
  return (
      <Container>
          <H2>Your Products</H2>
          {/* <button onClick={()=>dispatch(deleteProduct(idCart))}>Delete</button> */}
          <Wrapper >
            {list.length ? (list.map((i)=>{
                  return(
                      <Card key={Math.random()}>
                        <Box>
                            <Title>{i.model}</Title>
                            <Price>{i.count > 1 && `${i.count} items`}</Price>
                            <Buttons>
                                {/* <Button onClick={()=>dispatch(buyProduct(i))}>Buy</Button> */}
                                <Button onClick={()=>dispatch(deleteProduct({model: i.model, user: i.clientUsername, count:i.count}))}>Delete</Button>
                            </Buttons>
                        </Box>
                    </Card>
                  )
              })):(<div style={style}>There Aren't Products to show</div>)}
          </Wrapper>
      </Container>
  )
}

export default Cart