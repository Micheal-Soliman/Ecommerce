import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addProduct } from '../../redux/cartSlice'
import{Container, Box, ContainerImg, Image,BoxProduct, Item, Button, ItemButton} from './ProductStyle'
function Product() {
  const dispatch = useDispatch()
  const [Data, setData] = useState([])
  const [responseRequest, setResponseRequest] = useState('')
  let Username = sessionStorage.getItem('sign');      
  const product = useParams()
  useEffect(()=>{
    if (responseRequest == 'Done adding to cart') {
        const buyProduct = JSON.parse(sessionStorage.getItem('buyProduct'))
        fetch(`https://localhost:5001/api/models/Get/${buyProduct.model}`)
        .then(res=>res.json())
        .then(json=> dispatch(addProduct({model: buyProduct.model, image: json.imagePath ,clientUsername:buyProduct.clientUsername, rate: buyProduct.rate, count:1}))
        )
     }
},[responseRequest])
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
    fetch(`https://localhost:5001/api/models/Get/${product.id}`)
            .then(res=>res.json())
            .then(json=>setData(json))
  },[product.id])
  console.log(Object.keys(Data).length)
  return (
    <Container>
      {Object.keys(Data).length?
        (
          <Box key={Data.id}>
            <ContainerImg>
              <Image src={Data.imagePath} alt='Background'/>
            </ContainerImg>
            <BoxProduct>
              <Item><b>the category : </b>{Data.category}</Item>
              <Item><b>the title : </b>{Data.name}</Item>
              <Item><b>the rate : </b>{Data.rate ? Data.rate : 0} from 5</Item>
              <Item><b>the price : </b><sup>$</sup>{Data.price}</Item>
              <Item><b>the description : </b>{Data.features}</Item>
              <Item>{sessionStorage.getItem('soldout') == Data.name && responseRequest}</Item>
              <ItemButton>                                                
                    <Button onClick={()=>{
                                          if (sessionStorage.getItem('sign') === null) {
                                              window.location.href = `/signin`
                                          } else if (Data.name){
                                            setResponseRequest('')
                                            sessionStorage.setItem('soldout',`${Data.name}`)
                                            fetch(`https://localhost:5001/api/carts/add/${Username}/${Data.name}`, {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                }) 
                                                .then(function(response) {
                                                  return response.text().then(function(text) {
                                                    setResponseRequest(text)
                                                  });
                                                });
                                            sessionStorage.setItem('buyProduct',`${JSON.stringify({model: Data.name, clientUsername:Username, rate: Data.rate, count:1})}`)   
                              }}}>Add To Cart</Button>
                </ItemButton>
            </BoxProduct>   
          </Box>
        ) : Loading
      }
    </Container>
  )
}

export default Product