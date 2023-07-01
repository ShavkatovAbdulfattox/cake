import React from "react";
import { styled } from "styled-components";
import { Title } from "../Child/Child";
import WhatsAppBtn from "../Btns/WhatsAppBtn";
import Tiktok from "../../assets/icons/tiktok.png";
import Inst from "../../assets/icons/instagram.png";
import Youtube from "../../assets/icons/youtube.png";

function Contact() {
  return (
    <Wrapper className="container mt-36">
      <Title>Контакты</Title>
      <Content className="py-10 px-10">
        <div className="">
          <h2 className="text-2xl font-Montserrat700 text-pink mb-5">
            Мы находимся по адресу:
          </h2>
          <p className="text-xl font-Montserrat500 mb-5">
            МО, Люберцы, Весенняя, 16
          </p>
          <p className="text-xl font-Montserrat500 flex gap-10">
            Работаем с 8:00 до 22:00
            <span>
              <a href="tel:+79165760433" className="font-Montserrat700">
                +7 (916) 576-04-33
              </a>
            </span>
          </p>
          <div className="flex gap-8 mt-8">
            <WhatsAppBtn />
            <WhatsAppBtn text="Заказать звонок" />
          </div>
          <h2 className="text-2xl font-Montserrat700 text-pink mb-5 mt-12 ">
            Ждём Вас в наших социальных сетях :)
          </h2>
          <div className="flex items-center gap-5 mt-8">
            <img src={Youtube} alt="youtube" className="cursor-pointer" />
            <img src={Inst} alt="instagram" className="cursor-pointer" />
            <img src={Tiktok} alt="tiktok" className="cursor-pointer" />
          </div>
        </div>
        <div className="h-auto w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385712.7138579414!2d68.68463877841299!3d40.95124090877907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bca4fe8bdd3%3A0x1f38205b26971ccb!2zTGEgTWlyYW5kYSAtINGC0L7RgNGC0Ysg0Lgg0YHQu9Cw0LTQvtGB0YLQuA!5e0!3m2!1sru!2s!4v1688230928341!5m2!1sru!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.section``;
const Content = styled.article`
  border-radius: 15px;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  display: flex;
  justify-content: space-between;
`;

export default Contact;
