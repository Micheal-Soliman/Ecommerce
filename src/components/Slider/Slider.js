import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {Container, Arrow ,Wrapper, Slide,H1,ImgContainer, Image, InfoContainer, Title, Desc, Btn,NavLink} from './SliderStyle'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";



const Slider = () => {
  const[somesomeData, setSomesomeData] = useState([])
    useEffect(()=>{
        fetch(`https://localhost:5001/api/models/GetAllOrderdBySale/4`)
        .then(res=>res.json())
        .then(json=>setSomesomeData(json)) 
    },[])
    
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  // const {somesomeData} = useSelector((state)=> state.product)
  return (
    <Container>
      {somesomeData.length ? (<>
        <Arrow direction="left" onClick={() => handleClick("left")}>
              <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
              {somesomeData.filter((i)=>{
                if (i.isSale == true) {
                  return i
                }
              }).map((item) => (
                <Slide bg={item.bg} key={item.id}>
                  <H1>Sales For {Math.floor(((100 - ((item.salePrice / item.price) * 100))))}%</H1>
                  {/* <H1>1Sales For ${item.sale}</H1> */}
                  <ImgContainer>
                    <Image src={item.imagePath} />
                  </ImgContainer>
                  <InfoContainer>
                    <Title>{item.name}</Title>
                    <Desc>{item.features}</Desc>
                    <Btn><NavLink to={`/products/${item.name}`}>SHOP NOW</NavLink></Btn>
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