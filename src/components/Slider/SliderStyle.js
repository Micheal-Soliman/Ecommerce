import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 85px);
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${mainColor};
  color: ${thirdColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  @media screen and (max-width: 320px){
      width: 25px;
      height: 25px;
    }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0px 65px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 992px){
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
export const H1 = styled.h1`
  position: absolute;
  top: 10%;
  letter-spacing: 4px;
  @media screen and (max-width: 992px){
    position: unset;
  }
`;

export const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 992px){
    height: auto;
    margin-bottom: 20px
  }
`;

export const Image = styled.img`
  height: 50%;
  @media screen and (max-width: 992px){
    height: 170px;
    width: 170px;
  }
  @media screen and (max-width: 600px){
    height: 170px;
    width: 170px;
  }
`;

export const InfoContainer = styled.div`
    width: 70%;
  @media screen and (max-width: 992px){
    width: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
`;

export const Desc = styled.p`
  font-weight: 500;
  letter-spacing: 2px;
  @media screen and (max-width: 600px){
    display: none;
  }
`;
export const Btn = styled.div`
  display: flex;
  justify-content: center;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
    color: white;
    padding: 10px;
    border: 1px solid;
    border-radius: 20px;
    background: ${mainColor};
    &:hover{
      color: white;
    }
    @media screen and (max-width: 768px){
      margin-top: 20px;
    }
`;