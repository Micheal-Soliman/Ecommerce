import React from 'react'
import { Container, Title, Card, CardInner,CardFront, User,Name, CardBack, NavLink} from './AboutStyle'
function About() {
  return (
    <Container>
        <Title>Developer</Title>
        <Card>
            <CardInner>
                <CardFront>
                    <User />
                    <Name>Micheal Soliman</Name>
                </CardFront>
                <CardBack>
                    <Name>Github: <NavLink href='https://github.com/Micheal-Soliman' title='Click To Go My Github'>Micheal-Soliman</NavLink></Name>
                    <Name>Linkedin: <NavLink href='https://www.linkedin.com/in/micheal-soliman-a251391a5/' title='Click To Go My Linkedin'>Micheal Soliman</NavLink></Name>
                </CardBack>
            </CardInner>
        </Card>
    </Container>
  )
}

export default About