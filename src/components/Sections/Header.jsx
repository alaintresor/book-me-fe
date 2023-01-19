import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import HeaderImage from "../../assets/img/2000.jpg";


export default function Header() {
  const navigate = useNavigate()
  const [place, setPlace] = useState('')
  const [arrival, setArrival] = useState('')
  const [departure, setDeparture] = useState('')
  const [room, setRoom] = useState('')
  const [adult, setAdult] = useState('')
  const [child, setChild] = useState('')
  const handleSubmit = (e) => {
    navigate(`/search/${place}/${arrival}/${departure}/${room}/${adult}/${child}`)
    e.preventDefault()
    console.log(place)

  }
  return (
    <>
      <Wrapper style={{ background: `url('${HeaderImage}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%" }}>

        <div className='container-fluid'>
          <center>
            <FormHome>
              <form onSubmit={handleSubmit}>
                <div className="form-container">
                  <div className="form-group-header">
                    <label htmlFor="place">Place</label>
                    <input className="form-control1" type="text" value={place} onChange={(e) => setPlace(e.target.value)} name="" id="" />
                  </div>
                  <div className="form-group-header">
                    <label htmlFor="place">Arrival</label>
                    <input className="form-control1" type="date" value={arrival} onChange={(e) => setArrival(e.target.value)} name="" id="" />
                  </div>
                  <div className="form-group-header">
                    <label htmlFor="place">Departure</label>
                    <input className="form-control1" type="date" value={departure} onChange={(e) => setDeparture(e.target.value)} name="" id="" />
                  </div>
                  <div className="form-group-header">
                    <label htmlFor="place">Room</label>
                    <input className="form-control1" type="number" value={room} onChange={(e) => setRoom(e.target.value)} name="" id="" />
                  </div>
                  <div className="form-group-header">
                    <label htmlFor="place">Adult</label>
                    <input className="form-control1" type="number" value={adult} onChange={(e) => setAdult(e.target.value)} name="" id="" />
                  </div>
                  <div className="form-group-header">
                    <label htmlFor="place">Child</label>
                    <input className="form-control1" type="number" value={child} onChange={(e) => setChild(e.target.value)} name="" id="" />
                  </div>
                  <div className="form-group-header">
                    <label htmlFor="place"></label>
                    <input className="btn" value="Search" type="submit" name="" id="" />
                  </div>
                </div>
              </form>
            </FormHome>
          </center>
        </div>
      </Wrapper>

    </>
  );
}

const FormHome = styled.section`
  padding: 60px;
  z-index: 9;
  opacity: 0.8;
  background:#990f0f80;
  z-index:9px;
  width: 80%;
  border-radius:15px;
  margin-top:22vh;
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


