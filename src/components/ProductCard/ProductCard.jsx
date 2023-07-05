import React from "react";
import { styled } from "styled-components";

import WhatsAppBtn from "../Btns/WhatsAppBtn";

import basketIcon from "../../assets/icons/basket.svg";

export default function ProductCard(props) {
  return (
    <Card>
      <Image src={props.img} />
      <Hr />
      <Title>{props.title}</Title>
      <Price>
        {props.price + " ₽/кг"} <Icon src={basketIcon} />
      </Price>
      <Btns>
        <WhatsAppBtn text="Заказать в 1 клик" hover="true" />
        <WhatsAppBtn hover="true" />
      </Btns>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 11px 7px 30px;
  max-width: 257px;
  width: 100%;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.07);
`;

const Image = styled.img`
  max-height: 216.315px;
  margin-bottom: 36px;
`;

const Hr = styled.hr`
  border: none;
  border-radius: 101px;
  background: var(--black, #464646);
  width: 43px;
  height: 1px;
  margin-bottom: 20px;
`;

const Title = styled.p`
  color: var(--black, #464646);
  text-align: center;
  font-size: 18px;
  font-family: "Montserrat400";
  line-height: normal;
  letter-spacing: 0.36px;
  margin-bottom: 20px;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  color: var(--black, #464646);
  text-align: center;
  font-size: 22px;
  font-family: "Montserrat700";
  line-height: normal;
  letter-spacing: 0.44px;
  margin-bottom: 30px;
`;

const Icon = styled.img`
  margin-left: 13px;
`;

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
