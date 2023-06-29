import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useRef } from "react";

import icon from "../../assets/icons/PlusBtn.png";

function AccordionItem(props) {
  const AccordionData = useRef(null);
  const [dataStatus, setDataStatus] = useState(props.activeStatus);

  useEffect(() => {
    setDataStatus(props.activeStatus);
  }, [props.activeStatus]);

  const handleStatusChange = () => {
    const newStatus = !dataStatus;
    setDataStatus(newStatus);
    props.getStatus(newStatus);
  };

  return (
    <Item>
      <Top onClick={handleStatusChange}>
        <Title>{props.title}</Title>
        <Icon src={icon} draggable="false" className="shadow-button shadow-red-300 rounded-full" />
      </Top>
      <Bottom ref={AccordionData} open={dataStatus}>
        <BottomContent>{props.children}</BottomContent>
      </Bottom>
    </Item>
  );
}

const Item = styled.div`
  width: 100%;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 85px 0 40px;
  border-radius: 104px;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  margin-bottom: 10px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 0 30px 0 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px 0 25px;
    margin-bottom: 5px;
  }
`;

const Title = styled.h5`
  color: #e9657e;
  font-size: 22px;
  font-family: "Montserrat400";
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.66px;
  padding: 22px 0;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 105%;
    letter-spacing: 0.45px;
  }
`;

const Icon = styled.img`
  height: 35px;
  width: 35px;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    height: 25px;
    width: 25px;
  }
`;

const Bottom = styled.div`
  border-radius: 25px;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  overflow: hidden;
  display: ${(props) => (props.open ? "block" : "none")};
  transition: 1s;
  transform-origin: top;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const BottomContent = styled.div`
  padding: 30px 89px 42px 25px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export default AccordionItem;
