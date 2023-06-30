import React, { useRef } from "react";
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
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <Wrapper className="container text-3xl text-pink rounded-[40px] w-full border-dashed border-white border-[3px]">
      <Swiper
        ref={swiperRef}
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
          <Content className="flex-shrink-0 py-10 px-6 flex items-start justify-between">
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
          <Content className="flex-shrink-0 pt-10 px-6 flex items-start justify-between">
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

            <div className="drop-shadow-3xl -mt-16 ">
              <img src={Watch} alt="cake-img" className=" " />
            </div>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Content className="relative flex-shrink-0 py-10 px-6 flex items-start justify-between pb-">
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

            <div className="drop-shadow-3xl absolute bottom- right-10  ">
              <img src={Discount} alt="img" className="-m-32" />
            </div>
          </Content>
        </SwiperSlide>
      </Swiper>
      <PrevButtonWrapper onClick={handlePrev}>
        <svg
          width="87"
          height="87"
          viewBox="0 0 87 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <g filter="url(#filter0_d_39_565)">
              <circle
                cx="17.5"
                cy="17.5"
                r="17.5"
                transform="matrix(-1 0 0 1 61 22)"
                fill="url(#paint0_linear_39_565)"
              />
            </g>
            <path
              d="M38.4286 39.5C38.4286 39.7689 38.5315 40.0377 38.7368 40.2426L45.2024 46.6923C45.6137 47.1026 46.2805 47.1026 46.6917 46.6923C47.1028 46.2822 47.1028 45.6171 46.6917 45.2068L40.9706 39.5L46.6915 33.7932C47.1026 33.383 47.1026 32.7179 46.6915 32.3079C46.2803 31.8974 45.6135 31.8974 45.2022 32.3079L38.7366 38.7574C38.5312 38.9625 38.4286 39.2313 38.4286 39.5Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_39_565"
              x="0"
              y="0"
              width="87"
              height="87"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="13" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.909804 0 0 0 0 0.360784 0 0 0 0 0.419608 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_39_565"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_39_565"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_39_565"
              x1="35.2756"
              y1="16.0417"
              x2="-0.000507974"
              y2="16.0091"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E75C6B" />
              <stop offset="1" stop-color="#EB8794" />
            </linearGradient>
          </defs>
        </svg>
      </PrevButtonWrapper>
      <NextButtonWrapper onClick={handleNext}>
        <svg
          width="87"
          height="87"
          viewBox="0 0 87 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3240_292)">
            <circle
              cx="43.5"
              cy="39.5"
              r="17.5"
              fill="url(#paint0_linear_3240_292)"
            />
          </g>
          <path
            d="M48.5714 39.5C48.5714 39.7689 48.4685 40.0377 48.2632 40.2426L41.7976 46.6923C41.3863 47.1026 40.7195 47.1026 40.3083 46.6923C39.8972 46.2822 39.8972 45.6171 40.3083 45.2068L46.0294 39.5L40.3085 33.7932C39.8974 33.383 39.8974 32.7179 40.3085 32.3079C40.7197 31.8974 41.3865 31.8974 41.7978 32.3079L48.2634 38.7574C48.4688 38.9625 48.5714 39.2313 48.5714 39.5Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_3240_292"
              x="0"
              y="0"
              width="87"
              height="87"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="13" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.909804 0 0 0 0 0.360784 0 0 0 0 0.419608 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3240_292"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3240_292"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_3240_292"
              x1="61.2756"
              y1="38.0417"
              x2="25.9995"
              y2="38.0091"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E75C6B" />
              <stop offset="1" stop-color="#EB8794" />
            </linearGradient>
          </defs>
        </svg>
      </NextButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background: linear-gradient(271deg, #e75c6b 0%, #f197a3 100%);
  max-height: 460px;

  position: relative;

  & .swiper-horizontal {
    max-height: 500px;
  }

  & .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    margin: -18px 0;
    padding: 8px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .swiper-pagination-bullet.swiper-pagination-bullet-active {
    height: 20px;
    width: 20px;
    background: linear-gradient(271deg, #e75c6b 0%, #ff5f75 100%);
    box-shadow: 5px 4px 26px 2px rgba(161, 68, 78, 0.4);
  }

  & .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border-radius: 8px;
    opacity: 0.5;
    background: linear-gradient(271deg, #ea7581 0%, #eb8794 100%);
    box-shadow: 0px 4px 26px 0px rgba(232, 92, 107, 0.4);
  }
  & .swiper-button-next,
  .swiper-button-prev {
    background-color: white;
    padding: 8px 16px;
    border-radius: 100%;
    border: 2px solid black;
    color: red;
    display: none;
  }

  & .swiper-button-next {
    position: absolute;
  }
`;

const Content = styled.div`
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

const PrevButtonWrapper = styled.button`
  /* Position the previous button outside the slider */
  position: absolute;
  top: 50%;
  left: -100px;
  transform: translateY(-50%);
  z-index: 1;
  /* Add your custom styles for the previous button */
`;

const NextButtonWrapper = styled.button`
  /* Position the next button outside the slider */
  position: absolute;
  top: 50%;
  right: -100px;
  transform: translateY(-50%);
  z-index: 1;
  /* Add your custom styles for the next button */
`;

export default Header;
