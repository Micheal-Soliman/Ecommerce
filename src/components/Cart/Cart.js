import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../redux/cartSlice'
import {Container,Card, Image, Box, Title, Price, NavLink, Button, Buttons} from '../Home/HomeStyle'
import {H2, Wrapper,style} from './CartStyle'

function Cart() {
    const {list} = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
  return (
      <Container>
          <H2>Your Products</H2>
          <Wrapper >
            {list.length ? (list.map((i)=>{
                  return(
                      <Card key={i.id}>
                        <Image src={i.image} alt='Background'/>
                        <Box>
                            <Title>{i.title}</Title>
                            <Price><sup>$</sup>{i.price}</Price>
                            <Price>{i.count > 1 && `${i.count} items`}</Price>
                            <Buttons>
                                <NavLink to={`products/${i.id}`}>Show More</NavLink>
                                <Button onClick={()=>dispatch(deleteProduct({id: i.id, count: i.count}))}>Delete</Button>
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