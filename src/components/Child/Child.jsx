import React from "react";
import styled from "styled-components";
import image from "../../assets/img/image114.png";
import { Container } from "../../App";

function Child() {
  const data = {
    title: `Кондитерская «Детство» - это...`,
    cardContent: [
      {
        title: `Превосходные торты для Вас и ваших детей`,
        description: `Превосходные торты для Вас и ваших детей. К нам приходят с уверенностью, что тортик будет вкусным и качественным`,
      },
      {
        title: `Собственное производство`,
        description: `Собственное производство позволяет экспериментировать и ежедневно улучшать наш любимый продукт – торты`,
      },
      {
        title: `36 пеших и автокурьеров`,
        description: `А чтобы вы получили ваше лакомство целым и к назначенному времени, у нас работает 36 пеших и автокурьеров.`,
      },
    ],
  };

  /**== Content ==**/

  return (
    <section className="child">
      <Container>
        {/* == */}

        <Content>
          <Title>{data.title}</Title>
          <Card>
            <CardLeft>
              <Image src={image}></Image>
            </CardLeft>
            <CardRight>
              {data.cardContent.map((item) => {
                return (
                  <Description key={data.cardContent.indexOf(item)}>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDesc>{item.description}</CardDesc>
                  </Description>
                );
              })}
            </CardRight>
          </Card>
        </Content>

        {/* == */}
      </Container>
    </section>
  );
}

export const Content = styled.div`
  width: 100%;
  padding-bottom: 150px;
`;

export const Title = styled.h2`
  color: #e75c6b;
  font-size: 36px;
  font-family: Junegull;
  letter-spacing: 1.08px;
  font-family: "Junegull";
  margin-bottom: 50px;
  text-transform: uppercase;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 70px;
  align-items: center;
  border-radius: 15px;
  border: 1px solid black;
  padding: 56px 90px 69px 50px;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
    padding: 40px 9px 70px 30px;
    column-gap: 49px;
  }

  @media screen and (max-width: 570px) {
    flex-direction: column-reverse;
    padding: 15px 10px 26px;
    column-gap: 0;
    row-gap: 38px;
  }
`;

const CardLeft = styled.div``;

const Image = styled.img`
  width: 340px;

  @media screen and (max-width: 768px) {
    width: 270px;
  }
`;

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 45px;
  max-width: 630px;
  width: 100%;
`;

export const Description = styled.div``;

export const CardTitle = styled.h4`
  color: #e9657e;
  font-size: 22px;
  font-family: Montserrat Alternates;
  font-weight: 700;
  letter-spacing: 0.66px;
  font-family: "Montserrat700";
  margin-bottom: 5px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CardDesc = styled.p`
  color: var(--black, #464646);
  font-size: 20px;
  font-weight: 300;
  line-height: 130%;
  font-family: "Raleway300";

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export default Child;
