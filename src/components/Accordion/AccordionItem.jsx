import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useRef } from "react";


function AccordionItem(props, ref) {
  const [dataStatus, setDataStatus] = useState(props.activeStatus);

  const handleStatusChange = () => {
    const newStatus = !dataStatus;
    setDataStatus(newStatus);
    props.getStatus(newStatus);
    console.log(props.title);
  };

}



export default AccordionItem;
