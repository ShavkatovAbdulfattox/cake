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
        <Button>
          <ButtonImage src={icon} />
        </Button>
      </Top>
      <Bottom ref={AccordionData} open={dataStatus}>
        <BottomContent>{props.children}</BottomContent>
      </Bottom>
    </Item>
  );
}

const Item = styled.div`
  width: 100%;
  margin-bottom: 10px;
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
`;

const Button = styled.button`
  border: none;
  background: none;
  position: relative;
  height: 35px;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
`;

const ButtonImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

const Bottom = styled.div`
  border-radius: 25px;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  overflow: hidden;
  max-height: ${(props) => (props.open ? Bottom.clientHeight + "px" : "0")};
  transition: 1s;
  transform-origin: top;
`;

const BottomContent = styled.div`
  padding: 30px 89px 42px 25px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export default AccordionItem;
