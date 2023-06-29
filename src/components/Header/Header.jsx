import React from "react";
import { styled } from "styled-components";
import H_img from "../../assets/img/header/H_img2.png";
import Gramm from "../../assets/img/header/Gramm.png";
import Watch from "../../assets/img/header/Watch.png";
import Vector from "../../assets/img/header/Vector.png";
import Discount from "../../assets/img/header/Discount.png";
import WhatsAppBtn from "../Btns/WhatsAppBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";


function Header() {
  return (
    <Wrapper className="container text-3xl text-pink rounded-[60px] w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          {" "}
          <Content className="flex-shrink-0 border-dashed border-white border-[3px] rounded-[60px] py-10 px-6 flex items-start justify-between">
            <div className="max-w-2xl flex flex-col justify-start">
              <Text className="font-Boorsok mb-10 text-5xl">до 20.10</Text>
              <h1 className="font-Boorsok text-white text-7xl">
                к любому торту БЕСПЛАТНО
              </h1>
              <img src={Gramm} alt="gramm" className="self-end -mt-10" />
            </div>
            <div className="drop-shadow-3xl">
              <img src={H_img} alt="cake-img" />
            </div>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content className="flex-shrink-0 border-dashed border-white border-[3px] rounded-[60px] pt-10 px-6 flex items-start justify-between">
            <div className="relative max-w-2xl flex flex-col justify-start">
              <Text className="font-Boorsok mb-10 text-5xl">(от 14 дней)</Text>
              <h1 className="font-Boorsok text-white text-7xl">
                7% за ранний предзаказ
              </h1>
              <div className="flex absolute bottom-32 right-14">
                <p className="text-white text-lg">
                  C учетом внесении <br /> предоплаты 50%{" "}
                </p>
                <img
                  src={Vector}
                  alt="vecotor"
                  className="absolute -bottom-10 -right-24"
                />
              </div>

              <form action="" className="flex gap-4 mt-14">
                <input
                  type="number"
                  placeholder="Телефон"
                  className="rounded-full text-lg px-4 py-4 w-full"
                />
                <button className="bg-pink text-white rounded-full py-4 px-9">
                  Отправить
                </button>
              </form>
            </div>

            <div className="drop-shadow-3xl">
              <img src={Watch} alt="cake-img" className=" " />
            </div>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Content className="relative flex-shrink-0 border-dashed border-white border-[3px] rounded-[60px] py-14 pb-32 px-6 flex items-start justify-between ">
            <div className="max-w-3xl flex flex-col justify-start ">
              <h1 className="font-Boorsok text-white text-4xl">
                Хотите получить дополнительную скидку 5% к вашему заказу?
                Выполните всего 3 действия:{" "}
              </h1>
              <p className="text-white text-3xl tracking-wider mt-4">
                1)Напишите нам в WhatsApp
              </p>
              <p className="text-white text-3xl tracking-wider">
                2) Отправьте фотографию тортика, который хотели бы получить
              </p>
              <p className="text-white text-3xl tracking-wider">
                3)Напишите сколько кг вам нужно
              </p>
            </div>
            <div className="self-end ml-auto mr-auto z-10 flex items-start gap-6">
              <WhatsAppBtn />
              <img src={Vector} alt="vector" className="-mt-7" />
            </div>

            <div className="drop-shadow-3xl absolute -bottom-28 right-0 ">
              <img src={Discount} alt="img" />
            </div>
          </Content>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  & .swiper-wrapper {
    display: flex;
    width: 100%;
  }
`;

const Content = styled.div`
  background: linear-gradient(271deg, #e75c6b 0%, #f197a3 100%);
  max-height: 493px;
  height: 100%;
`;
const Text = styled.p`
  border-radius: 29.068px;
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0));
  box-shadow: 0px 3.3220338821411133px 21.593219757080078px 0px
    rgba(232, 92, 107, 0.4);
  width: max-content;
  padding: 10px 25px;
`;

export default Header;
