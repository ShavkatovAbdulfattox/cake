import React from "react";
import styled from "styled-components";
// import { div  } from "../../App";

import WhatsAppBtn from "../Btns/WhatsAppBtn";
import {
  Content,
  Title,
  Description,
  CardTitle,
  CardDesc,
} from "../Child/Child";




import img from "../../assets/img/image123.png";
import arrowSvg from "../../assets/icons/Arrow.svg";
const data = {
  title: `получите подборку тортов под ваше мероприятие`,
  cardContent: [
    {
      title: `Расскажите о том, что вы хотите видеть`,
      description: `Расскажите о том, что вы хотите видеть или под какое мероприятие подбираете тортик, а мы вышлем подборку подходях тортиков и осуществим задуманное.`,
    },
  ],
};
function CakeCompilation() {
  return (
    <section>
      <div className="container">
        <Content>
          <Title>{data.title}</Title>
          <Card>
            <CardLeft>
              {data.cardContent.map((item) => {
                return (
                  <Description key={data.cardContent.indexOf(item)}>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDesc>{item.description}</CardDesc>
                  </Description>
                );
              })}
              <ImageClone src={img} />
              <ArrowSvg src={arrowSvg} />
              <WhatsAppBtn />
            </CardLeft>
            <CardRight>
              <Image src={img} />
            </CardRight>
          </Card>
        </Content>
      </div>
    </section>
  );
}

const Card = styled.div`
  border-radius: 15px;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 520px) {
    justify-content: center;
    padding: 20px 10px;
  }
`;

const CardRight = styled.div``;

const Image = styled.img`
  @media screen and (max-width: 520px) {
    max-width: 320px;
    display: none;
  }
`;

const ImageClone = styled.img`
  width: 100%;
  display: none;

  @media screen and (max-width: 520px) {
    display: block;
  }
`;

const CardLeft = styled.div`
  display: flex;
  row-gap: 50px;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 40px 40px;

  @media screen and (max-width: 768px) {
    padding: 40px 0 50px 30px;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

const ArrowSvg = styled.img`
  position: absolute;
  left: 320px;
  top: 187px;

  @media screen and (max-width: 950px) {
    position: static;
    transform: rotateZ(215deg) rotateX(180deg);
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export default CakeCompilation;
