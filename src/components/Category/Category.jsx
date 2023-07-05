import React from "react";
import { styled } from "styled-components";

function Category() {
  return (
    <Wrapper className="basis-96 rounded-2xl py-5 px-5 ">
      <h1 className="sticky top-10px">Hello catalog</h1>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
`;

export default Category;
