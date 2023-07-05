import React from "react";
import { styled } from "styled-components";
import { popularData } from "../../utils/popularData";

function PopularProducts({ title }) {
  return (
    <Wrapper className="rounded-2xl flex-grow px-5 py-6 mb-5">
      <Title className="text-center text-3xl font-Montserrat500 mb-5">
        {title ? title : "Популярные категории"}
      </Title>
      <Content className="grid grid-cols-3 gap-4">
        {popularData.map(({ id, title, img }) => {
          return (
            <div
              key={id}
              className="flex flex-col items-center justify-center basis-80 bg-white py-5 pb-10 px-5 rounded-2xl"
            >
              <img
                src={img}
                alt={title}
                className="max-w-[198px] w-full max-h-56 rounded-3xl  mb-16 object-cover"
              />
              <span className="w-16 h-1 bg-black select-none"></span>
              <h3 className="text-xl font-Montserrat500 before:conten mt-5 text-center">
                {title}
              </h3>
            </div>
          );
        })}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  background-color: rgba(255, 255, 255, 0.36);
`;
const Content = styled.div``;
const Title = styled.h2`
  color: #e9657e;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.84px;
`;

export default PopularProducts;
