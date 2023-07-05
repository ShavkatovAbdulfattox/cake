import React, { useContext } from "react";
import { styled } from "styled-components";
import { MyContext } from "../../context/stateProvider";

function Category() {
  const {
    state: { category },
  } = useContext(MyContext);
  console.log(category);
  return (
    <Wrapper className="basis-96 rounded-2xl py-5 px-5 ">
      <div className="flex flex-col gap-7">
        {category.map((title) => {
          return <h2 className="text-2xl font-Raleway500 text-gray-900 cursor-pointer">{title}</h2>;
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
`;

export default Category;
