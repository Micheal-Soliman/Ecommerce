import React from 'react'
import {Container, ContainerImg, Img, ContainerText, H1, H2, H3, NavLink} from './ErrorStyle'
function Error() {
  return (
    <Container>
        <ContainerImg>
            <Img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
            <Img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
        </ContainerImg>
        <ContainerText >
            <H1>404</H1>
            <H2>PAGE NOT FOUND</H2>
            <H3>BACK TO HOME?</H3>
            <NavLink to="/Ecommerce/" >YES</NavLink>
            <NavLink to="/Ecommerce/error">NO</NavLink>
        </ContainerText>
    </Container>
  )
}

export default Error