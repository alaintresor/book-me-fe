import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoIcon from "../../assets/img/clients/logo.jpg";

export default function Banner({ hotel }) {



    return (
        <Wrapper>

            <div className='darkBg head row HeaderDetails' style={{ backgroundImage: `url('${hotel.image}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

                <h1>
                    {hotel.name}
                </h1>
                <h3>{hotel.location}</h3>
                <p className='desc'>{hotel.highlight}</p>
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