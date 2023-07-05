import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

import iconPlus from "../../assets/icons/PlusBtn.png";
import iconMinus from "../../assets/icons/MinusBtn.png";

function Accordion() {
  const data = {
    title: `Нас часто спрашивают`,
    items: [
      {
        title: `Как сделать заказ?`,
        description: [
          {
            subtitle: `Шаг 1. Выбираете оформление торта`,
            text: `Вы можете воспользоваться нашим удобным каталогом или отправить свой эскиз нам в WhatsApp. Расскажите о своем желании как можно больше!`,
          },
          {
            subtitle: `Шаг 2. Выбрать начинку`,
            text: `В нашем ассортименте много вкусных начинок с фотографиями разреза и описанием, обязательно найдете себе по вкусу`,
          },
          {
            subtitle: `Шаг 3. Выбрать опции`,
            text: `Это может быть дополнительное количество ягод, безе, зефира, макарон, шоколадок, надпись на ленте или торте.`,
          },
          {
            subtitle: `Шаг 4. Оплата и доставка`,
            text: `Выберите удобный способ оплаты (наличные, банковская карта) и способ доставки: вы можете забрать свой заказ сами или заказать надежную доставку до квартиры или офиса за отдельную плату.`,
          },
        ],
      },

      {
        title: ` Как оплачивать заказ?`,
        description: [
          {
            subtitle: `Вы можете выбрать удобный для Вас способ оплаты:`,
            text: `• наличными по факту получения торта в кондитерской, либо при доставке курьеру
• перечислив деньги на банковскую карту Сбербанка (номер карты Вам сообщит менеджер)`,
          },
        ],
      },

      {
        title: ` Нужна ли предоплата? Как внести предоплату?`,
        description: [
          {
            subtitle: ``,
            text: `Да, наша кондитерская работает только по предоплате в размере 30% от стоимости торта. На карту или наличными в кондитерской.
*Предоплата не возвращается, если Вы отказываетесь от заказа менее, чем за 1 день до даты доставки торта.`,
          },
        ],
      },

      {
        title: `Сколько стоит доставка и куда отправляете?`,
        description: [
          {
            text: `Доставка осуществляется ежедневно с 8:00 до 22:00 по Москве и Московской области. Наши автомобили оборудованы специальными холодильными камерами, что сохранит свежесть Вашего торта.`,
          },
          {
            subtitle: `Тарифы на доставку:`,
            text: `по Москве - 500 руб.
за МКАД - 500 руб. + 40 руб. за 1 км`,
          },
          {
            text: `Удобное Вам время доставки согласовывается с менеджером при оформлении заказа.
Если дата или адрес доставки меняется, пожалуйста, сообщите нам об этом заблаговременно.`,
          },
        ],
      },

      {
        title: `Что входит в стоимость торта?`,
        description: [
          {
            text: `В стоимость 1600 руб. за 1 кг - включена начинка, корректировки под Ваши предпочтения, упаковка, поднос и поздравительная надпись.`,
          },
          {
            subtitle: `Примеры расчета:`,
            text: `2 кг * 1600 руб. за 1 кг = 3200 руб.
2,5 кг * 1600 руб. за 1 кг = 4000 руб.
3 кг * 1600 руб. за 1 кг = 4800 руб.`,
          },
          {
            subtitle: `Шаг 3. Выбрать опции`,
            text: `Это может быть дополнительное количество ягод, безе, зефира, макарон, шоколадок, надпись на ленте или торте.`,
          },
          {
            subtitle: `Шаг 4. Оплата и доставка`,
            text: `Выберите удобный способ оплаты (наличные, банковская карта) и способ доставки: вы можете забрать свой заказ сами или заказать надежную доставку до квартиры или офиса за отдельную плату.`,
            text: `Доплата может быть только за оформление. в среднем 10-15% от стоимости торта.`,
          },
        ],
      },

      {
        title: `Какой минимальный вес заказных тортов?`,
        description: [
          {
            text: `Мы принимаем заказы на торты весом от 2 до 50 кг.`,
          },
          {
            text: `Для клиентов, которые заказывают одновременно несколько тортов, мы всегда идем на встречу и принимаем заказы меньшие по весу.`,
          },
          {
            text: `Обращаем Ваше внимание, что наши профессиональные кондитеры могут изготовить торт любой сложности и формы.`,
          },
        ],
      },

      {
        title: `За сколько дней нужно заказывать тортик?`,
        description: [
          {
            text: `В связи с высокой загруженностью, время предзаказа увеличилось до 7
дней. Но мы принимаем срочные заказы за доплату в 500р.`,
          },
        ],
      },

      {
        title: `Почему такая стоимость?`,
        description: [
          {
            text: `Мы используем в приготовлении тортов только высококачественное сырье от российских и зарубежных производителей. Каждый ингредиент имеет сертификаты качества.`,
          },
          {
            text: `🍫Бельгийский шоколад и какао Callebaut.
Дополняют друг друга в приготовлении конфет, покрытий для тортов, в начинках для тортов`,
          },
          {
            text: `🥛Сливки 33%-ые Parmallat и Петмол.
Придают торту нежную структуру, входя в состав тортов, и служат хорошей основой`,
          },
          {
            text: `🍇Французское фруктовое пюре Boiron.
Лучшее качество пюре даёт возможность создавать восхитительные вкусы тортов
            `,
          },
          {
            text: `🍓Свежие ягоды напрямую с фермерского рынка.
Завершают образ торта. Также находясь в составе начинки, делают вкус ярче и насыщеннее`,
          },
          {
            text: `🍶Сливочное масло 82,5% Экомилк, мука Макфа
Для появления пышной выпечки, рассыпчатого печенье, воздушных бисквитов`,
          },
          {
            text: `🍫Фигурки из натурального шоколада.
Благодаря пластике шоколада возможно появление различных фигурок, тонких листиков, завитков`,
          },
        ],
      },
    ],
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const selected = (i) => {
    if (i == selectedItem) {
      return setSelectedItem(null);
    }

    return setSelectedItem(i);
  };

  return (
    <AccordionWrapper>
      <div className="container">
        <Title>{data.title}</Title>
        <Accordions>
          {data.items.map((item, index) => {
            return (
              <Item key={index}>
                <Top onClick={() => selected(index)}>
                  <ItemTitle>{item.title}</ItemTitle>
                  <Icon
                    src={selectedItem == index ? iconPlus : iconMinus}
                    draggable="false"
                    className="shadow-button shadow-red-300 rounded-full"
                  />
                </Top>
                <Bottom
                  style={{ display: selectedItem == index ? "block" : "none" }}
                >
                  <BottomContent>
                    {item.description.map((descrData, idx) => {
                      return (
                        <Section key={idx}>
                          <AccordionTitle>{descrData.subtitle}</AccordionTitle>
                          <AccordionText>{descrData.text}</AccordionText>
                        </Section>
                      );
                    })}
                  </BottomContent>
                </Bottom>
              </Item>
            );
          })}
        </Accordions>
      </div>
    </AccordionWrapper>
  );
}

const AccordionWrapper = styled.div``;

const Title = styled.h2`
  color: #e75c6b;
  font-size: 36px;
  font-family: "Junegull";
  letter-spacing: 1.08px;
  text-transform: uppercase;
  margin-bottom: 50px;
`;

const Accordions = styled.div``;

const Section = styled.div``;

const AccordionTitle = styled.h6`
  font-family: "Raleway700";
  color: var(--black, #464646);
  font-size: 18px;
  line-height: 130%;
`;

const AccordionText = styled.pre`
  font-family: "Raleway300";
  color: var(--black, #464646);
  font-size: 18px;
  line-height: 130%;
  white-space: pre-wrap;
`;

/*****/

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
  user-select: none;

  @media screen and (max-width: 768px) {
    padding: 0 30px 0 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px 0 25px;
    margin-bottom: 5px;
  }
`;

const ItemTitle = styled.h5`
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
  /* display: ${(props) => (props.className == "active" ? "block" : "none")}; */
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

export default Accordion;
