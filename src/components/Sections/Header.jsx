import React from "react";
import styled from "styled-components";
// Components
import { Link } from "react-router-dom";
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/2000.jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

export default function Header() {
  return (
    <>
    <Wrapper  className="" style={{  }}>
  
    <div className='container-fluid'>
                <div className='header row' style={{ background: `url('${HeaderImage}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat",width:"100%" }}>

                  <FormHome>
                    <div className="form-container">
                      <div className="form-group-header">
                        <label htmlFor="place">Place</label>
                        <input className="form-control1" type="text" name="" id="" />
                      </div>
                      <div className="form-group-header">
                        <label htmlFor="place">Arrival</label>
                        <input className="form-control1" type="date" name="" id="" />
                      </div>
                      <div className="form-group-header">
                        <label htmlFor="place">Departure</label>
                        <input className="form-control1" type="date" name="" id="" />
                      </div>
                      <div className="form-group-header">
                        <label htmlFor="place">Room</label>
                        <input className="form-control1" type="number" name="" id="" />
                      </div>
                      <div className="form-group-header">
                        <label htmlFor="place">Adult</label>
                        <input className="form-control1" type="number" name="" id="" />
                      </div>
                      <div className="form-group-header">
                        <label htmlFor="place">Child</label>
                        <input className="form-control1" type="number" name="" id="" />
                      </div>
                      <div className="form-group-header">
    
                        <input className="btn" value="Search" type="submit"  name="" id="" />
                      </div>
                    </div>
                  </FormHome>
                </div>
            </div>
    </Wrapper>
  
    </>
  );
}

const FormHome = styled.section`
  padding: 60px;
  position: absolute;

  z-index: 9;
  opacity: 0.8;
  background:#990f0f80;
  z-index:9px;
  width: 75%;
  border-radius:15px;
  margin-top:20vh;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 400px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


