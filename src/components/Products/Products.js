import React, {useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
import { getProduct } from '../../redux/productSlice'
import {Wrapper,Card, Image, Box, Title, Price, NavLink, Button, Buttons, Container} from '../Home/HomeStyle'
import {Head, SearchBox,SearchIcon, Search, FilterBox, ButtonFilter} from './productsStyle'
function Products() {
    // useEffect(()=>{
    //     fetch('https://localhost:5001/api/clients')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // },[])

    const {Data} = useSelector((state)=> state.product)
    let Username = sessionStorage.getItem('sign');      
    const [show, setShow] = useState(Data)
    const [sold, setSold] = useState('')
    const [responseRequest, setResponseRequest] = useState('')
    // console.log(Data)
    const {statue} = useSelector((state)=> state.product)
    const dispatch = useDispatch()
    useEffect(()=> dispatch(getProduct()),[])
    useEffect(()=>{

    },[])
    useEffect(()=> setShow(Data),[statue])
    const [idProduct, setIdProduct] = useState()
    const [searchTerm, setSearchTerm] = useState('')
    const search = useRef()
    const setFilter = (category, cat) => {
        const updated = Data.filter((i) => {
            if (i.category == category || i.category == cat) {
                return i
            }
        })
        setShow(updated)
    }
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
            {Data.length ?
                <Head>
                    <SearchBox>
                        <SearchIcon onClick={()=>search.current.focus()}/>
                        <Search ref={search} type='text' onChange={(x) => setSearchTerm(x.target.value)} />
                    </SearchBox>
                    <FilterBox>
                        <ButtonFilter onClick={() => setShow(Data)}>All</ButtonFilter>
                        <ButtonFilter onClick={() => setFilter("RAM")}>Ram</ButtonFilter>
                        <ButtonFilter onClick={() => setFilter("SSD")}>Hard Disk</ButtonFilter>
                        <ButtonFilter onClick={() => setFilter("K&M")}>Keyboard</ButtonFilter>
                        <ButtonFilter onClick={() => setFilter("Mouse")}>Mouse</ButtonFilter>
                    </FilterBox>
                </Head> 
                : null}
            <Wrapper>
            {show.length ? (show.filter((i) => {
                            if (searchTerm == '') {
                                return i
                            } else if (i.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return i
                            }
                        }).map((i) => {
                                return (
                                    <Card key={i.name}>
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
                            })) : statue && Loading}
            </Wrapper>

        </Container>
    )
}

export default Products