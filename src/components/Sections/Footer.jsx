import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoIcon from "../../assets/img/clients/logo.jpg";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg" style={{background:"#990f0f80"}}>
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
            <img src={LogoIcon} height="50" width="50" alt="logo"/>
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                BookMe
              </h1>
            </Link>
            <Link className="address" to="home" smooth={true} offset={-80}>
      
              <h4 className="font15  whiteColor" style={{ marginLeft: "15px" }}>
                kk 366 st, Kigali
              </h4>
              <h4 className="font15  whiteColor" style={{ marginLeft: "15px" }}>
                godiscoverafrica20@gmail.com
              </h4>
              <h4 className="font15  whiteColor" style={{ marginLeft: "15px" }}>
                +250781325077, +250791349744, +250785601720
              </h4>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">GODISCOVER AFRICA LTD</span> All Right Reserved
            </StyleP>

            
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;