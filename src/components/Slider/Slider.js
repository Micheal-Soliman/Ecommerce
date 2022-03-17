import { useState } from "react";
import { useSelector } from "react-redux";
import {Container, Arrow ,Wrapper, Slide,H1,ImgContainer, Image, InfoContainer, Title, Desc, Btn,NavLink} from './SliderStyle'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";



const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  const {Data} = useSelector((state)=> state.product)
  return (
    <Container>
      {Data.length ? (<>
        <Arrow direction="left" onClick={() => handleClick("left")}>
              <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
              {Data.slice(0,4).map((item) => (
                <Slide bg={item.bg} key={item.id}>
                  <H1>Sales For 50%</H1>
                  <ImgContainer>
                    <Image src={item.image} />
                  </ImgContainer>
                  <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.description}</Desc>
                    <Btn><NavLink to={`products/${item.id}`}>SHOP NOW</NavLink></Btn>
                  </InfoContainer>
                </Slide>
              ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
              <ArrowRightOutlined />
            </Arrow>
      </>) : null}
    </Container>
  );
};

export default Slider;