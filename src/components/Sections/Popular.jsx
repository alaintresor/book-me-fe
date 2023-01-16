import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import { Link } from "react-router-dom";

import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

export default function Popular() {
  const [hotels, setHotels] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://bookme.up.railway.app/api/v1/accomodation`)
      .then((res) => {
        const { rows } = res.data.data    
        setHotels(rows)
      })
      .catch((err) => {
      });
  }, [])

  return (
    <>
  
    <Wrapper id="projects" style={{marginTop:"30px"}}>
    
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Hotels</h1>
            <p className="font13">
               hotels in Rwanda.

            </p>
          </HeaderInfo>
          <div className="row textCenter">
           
            {hotels.map((hotel) => (

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img={hotel.image}
                  title={hotel.name}
                  text={hotel.highlight}
                  action={() => navigate(`/hotel-detail/${hotel.id}`)}
                />
              </div>
             ))} 
           
          </div>
  
        </div>
      </div>

    </Wrapper>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
