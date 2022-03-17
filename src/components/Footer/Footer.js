import React from 'react'
import { Name, Container, NavLink } from './FooterStyle'
function Footer() {
  return (
    <Container>
        Copyright © 2022,<Name>Micheal Soliman</Name><NavLink title='Click To Go My Github' href='https://github.com/Micheal-Soliman'>Github</NavLink>
    </Container>
  )
}

export default Footer