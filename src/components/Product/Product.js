import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addProduct } from '../../redux/cartSlice'
import { buyProduct } from '../../redux/productSlice'
import{Container, Box, ContainerImg, Image,BoxProduct, Item, Button, ItemButton} from './ProductStyle'
function Product() {
  const {Data} = useSelector((state)=> state.product)
  const dispatch = useDispatch()
  const product = useParams()
  return (
    <Container>
      {Data.filter((i)=>{
        if (i.id == product.id) {
          return i
        }
      }).map((i)=>{
        return(
          <Box key={i.id}>
            <ContainerImg>
              <Image src={i.image} alt='Background'/>
            </ContainerImg>
            <BoxProduct>
              <Item><b>the category : </b>{i.category}</Item>
              <Item><b>the title : </b>{i.title}</Item>
              <Item><b>the rate : </b>{i.rating && i.rating.rate} from 5</Item>
              <Item><b>the price : </b><sup>$</sup>{i.price}</Item>
              <Item><b>the description : </b>{i.description}</Item>
              <ItemButton><Button onClick={()=>{dispatch(addProduct({id: i.id, image: i.image, title: i.title, price: i.price, count:1}))
                           dispatch(buyProduct(i))}}>Buy</Button></ItemButton>

            </BoxProduct>   
          </Box>
        )
      })
      }
    </Container>
  )
}

export default Product