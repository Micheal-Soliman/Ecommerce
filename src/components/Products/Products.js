import React, {useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
import { buyProduct, getProduct } from '../../redux/productSlice'
import {Wrapper,Card, Image, Box, Title, Price, NavLink, Button, Buttons, Container} from '../Home/HomeStyle'
import {Head, SearchBox,SearchIcon, Search, FilterBox, ButtonFilter} from './productsStyle'
function Products() {
    const {Data} = useSelector((state)=> state.product)
    const {statue} = useSelector((state)=> state.product)
    const dispatch = useDispatch()
    useEffect(()=> dispatch(getProduct()),[])
    useEffect(()=> setShow(Data),[statue])
    const [show, setShow] = useState(Data)
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
                        <ButtonFilter onClick={() => setFilter("men's clothing")}>Men's Clothing</ButtonFilter>
                        <ButtonFilter onClick={() => setFilter("women's clothing")}>Women's Clothing</ButtonFilter>
                        <ButtonFilter onClick={() => setFilter("jewelery")}>Jewelery</ButtonFilter>
                        <ButtonFilter onClick={() => setFilter("electronics")}>Electronics</ButtonFilter>
                    </FilterBox>
                </Head> 
                : null}
            <Wrapper>
            {show.length ? (show.filter((i) => {
                            if (searchTerm == '') {
                                return i
                            } else if (i.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return i
                            }else if(show.length == 0){
                            }
                        }).map((i) => {
                                return (
                                    <Card key={i.id}>
                                        <Image src={i.image} alt="Background"/>
                                        <Box>
                                            <Title>{i.title}</Title>
                                            <Price><sup>$</sup>{i.price}</Price>
                                            <Buttons>
                                                <NavLink to={`products/${i.id}`}>Show More</NavLink>
                                                <Button onClick={()=>{dispatch(addProduct({id: i.id, image: i.image, title: i.title, price: i.price, count:1}))
                                                dispatch(buyProduct(i))}}>Buy</Button>
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