import React from "react";
import { styled } from "styled-components";
import { Title } from "../Child/Child";
import WhatsAppBtn from "../Btns/WhatsAppBtn";
import Order_bg from "../../assets/img/Order.png";
import WhatsApp from "../../assets/icons/WhatsApp.svg"
import Viber from "../../assets/img/navbar/viber.png"
import Telegram from "../../assets/img/navbar/telegram.png"

function Order() {
  return (
    <Wrapper className="container mt-36 ">
      <Title>Закажите торт в 1 клик!</Title>

      <Content className="rounded-3xl px-10 py-10  flex justify-between items-center">
        <div className="">
          <h2 className="text-2xl font-Montserrat700 text-pink">
            Просто заполните имя и номер телефона
          </h2>
          <p className="text-xl font-Raleway300">
            Менеджер сам предложит варианты оформления <br /> и начинки тортика
            для вашего праздника
          </p>
          <form action="" className="flex flex-col max-w-xs gap-5 mt-7">
            <input
              type="text"
              name="Name"
              placeholder="Имя"
              className="shadow-md font-Montserrat500 py-5 px-7 rounded-full"
            />
            <input
              type="number"
              name="Phone"
              placeholder="Телефон"
              className="shadow-md font-Montserrat500 py-5 px-7 rounded-full"
            />
            <WhatsAppBtn text="Получить консультацию" />
          </form>
          <div className="mt-7 flex items-center gap-3 ">
            <p className="font-Raleway300 mr-3 text-lg">Или напишите в:</p>
            <a href="#!"><img src={Viber} alt="social-media-viber" /></a>
            <a href="#!"><img src={Telegram} alt="social-media-telegram" /></a>
            <a href="#!"><img src={WhatsApp} alt="social-media-whatsapp" className="w-8 h-8" /></a>
          </div>
        </div>
        <img src={Order_bg} alt="Order-img" />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.section``;
const Content = styled.div`
  border-radius: 15px;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
`;

export default Order;
