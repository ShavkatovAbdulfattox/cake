import React from "react";
import styled from "styled-components";
import img from "../../assets/icons/WhatsApp.svg";

export default function WhatsAppBtn(props) {
  return (
    <Button style={props.style}>
      <Link href="#">
        <Title>Написать в</Title>
        <Image src={img} />
      </Link>
    </Button>
  );
}

const Button = styled.div`
  display: inline-block;
  border-radius: 2000px;
  background: #5ef998;
  box-shadow: 0px 4px 30px 0px rgba(94, 249, 152, 0.5);
  overflow: hidden;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  padding: 13px 32px;
  height: 100%;
  width: 100%;
  text-decoration: none;
`;

const Title = styled.p`
  color: var(--black, #464646);
  font-size: 16px;
  font-family: "Montserrat500";
  white-space: nowrap;
`;

const Image = styled.img``;
