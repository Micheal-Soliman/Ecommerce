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
                    <Name>Mohamed Harby</Name>
                </CardFront>
                <CardBack>
                    <Name>Github: <NavLink href='https://github.com/Mohamed-Harby' title='Click To Go My Github'>Mohamed-Harby</NavLink></Name>
                    <Name>Linkedin: <NavLink href='#' title='Click To Go My Linkedin'>----------</NavLink></Name>
                </CardBack>
            </CardInner>
        </Card>

        <Card>
            <CardInner>
                <CardFront>
                    <User />
                    <Name>Mohammad Badee</Name>
                </CardFront>
                <CardBack>
                    <Name>Github: <NavLink href='https://github.com/Badea741' title='Click To Go My Github'>Badea741</NavLink></Name>
                    <Name>Linkedin: <NavLink href='#' title='Click To Go My Linkedin'>----------</NavLink></Name>
                </CardBack>
            </CardInner>
        </Card>

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

        <Card>
            <CardInner>
                <CardFront>
                    <User />
                    <Name>Ahmed Younis</Name>
                </CardFront>
                <CardBack>
                    <Name>Github: <NavLink href='https://github.com/ahmedyounis253' title='Click To Go My Github'>ahmedyounis253</NavLink></Name>
                    <Name>Linkedin: <NavLink href='#' title='Click To Go My Linkedin'>----------</NavLink></Name>
                </CardBack>
            </CardInner>
        </Card>

        <Card>
            <CardInner>
                <CardFront>
                    <User />
                    <Name>Alaa Ahmed</Name>
                </CardFront>
                <CardBack>
                    <Name>Github: <NavLink href='https://github.com/Alaa-Ahmed-Elbasuony' title='Click To Go My Github'>Alaa-Ahmed-Elbasuony</NavLink></Name>
                    <Name>Linkedin: <NavLink href='#' title='Click To Go My Linkedin'>----------</NavLink></Name>
                </CardBack>
            </CardInner>
        </Card>

        <Card>
            <CardInner>
                <CardFront>
                    <User />
                    <Name>Nora Azab</Name>
                </CardFront>
                <CardBack>
                    <Name>Github: <NavLink href='#' title='Click To Go My Github'>----------</NavLink></Name>
                    <Name>Linkedin: <NavLink href='#' title='Click To Go My Linkedin'>----------</NavLink></Name>
                </CardBack>
            </CardInner>
        </Card>
    </Container>
  )
}

export default About