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
    <Wrapper className="lg:container mt-36 ">
      <Title>Закажите торт в 1 клик!</Title>

      <Content className="rounded-3xl lg:px-10 px-5 pt-10 flex justify-between lg:items-center  md:items-end items-center">
        <div className="lg:flex-shrink-0 lg:w-auto mb-3 ">
          <h2 className="lg:text-2xl text-xl font-Montserrat700 text-pink sm:text-left text-justify">
            Просто заполните имя и номер телефона
          </h2>
          <p className="lg:text-xl text-lg font-Raleway300 sm:text-left text-justify">
            Менеджер сам предложит варианты оформления <br className="md:block hidden"/> и начинки тортика
            для вашего праздника
          </p>
          <form action="" className="flex flex-col md:max-w-xs gap-5 mt-7 w-full">
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
        <img src={Order_bg} alt="Order-img" className="w-[55%] md:block hidden" />
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
