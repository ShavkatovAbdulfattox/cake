import React from "react";
import styled from "styled-components";
import img from "../../assets/icons/WhatsApp.svg";

export default function WhatsAppBtn(props) {
  return (
    <Button text={props.text} style={props.style} >
      <Link href="#">
        <Title text={props.text}>{props.text ? props.text: "Написать в"}</Title>
        {props.text ? undefined : <Image src={img} />}
      </Link>
    </Button>
  );
}

const Button = styled.div`
  display: inline-block;
  border-radius: 2000px;
  background:${(props) => props.text ? '#E75C6B' : '#5ef998'} ;
  box-shadow: 0px 4px 30px 0px ${(props) => props.text ? '#E75C6B' : '#5ef998'}  ;
  overflow: hidden;
  cursor: pointer;
  padding: ${(props) => props.text ? '5px' : '0'} ;

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
  color: ${(props) => props.text ? 'white' : 'black'};
  font-size: 16px;
  font-family: Montserrat500;
  white-space: nowrap;
`;

const Image = styled.img``;
