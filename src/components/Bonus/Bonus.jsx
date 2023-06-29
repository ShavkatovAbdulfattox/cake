import { styled } from "styled-components";
import { Container } from "../../App";
import cake from "../../assets/img/Bonus/cake.png";
import phone from "../../assets/img/Bonus/phone.png";
import bigImg from "../../assets/img/Bonus/bigImg.png";
import arrow from "../../assets/icons/Arrow.svg";
import WhatsAppBtn from "../Btns/WhatsAppBtn";

function Bonus() {
  return (
    <section className="bonus">
      <Container>
        <Title>Не нашли нужный торт? отправьте нам</Title>
        <Content>
          <Left>
            <Desc>
              Отправьте любую фотографию торта <br /> из интернета нам в
              WhatsApp – мы его <br /> испечем, а вы получите дополнительную
              <span style={{ color: "#000", fontWeight: "600" }}>
                {" "}
                скидку 5%
              </span>
            </Desc>
            <Discount>
              <Image src={cake} alt="cake" />
              <Span>+</Span>
              <Image src={phone} alt="phone" />
              <Span>=</Span>
              <Pct>5%</Pct>
              <Arrow src={arrow} alt="arrow" />
            </Discount>
            <WhatsAppBtn />
          </Left>
          <Right>
            <Big src={bigImg} alt="big" />
          </Right>
        </Content>
      </Container>
    </section>
  );
}

export const Title = styled.h2`
  padding-top: 100px;
  padding-bottom: 50px;
  color: #e75c6b;
  font-size: 36px;
  font-family: Junegull;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.08px;
`;

export const Content = styled.div`
  width: 1180px;
  height: 465px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 150px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 510px;
  height: 100%;
  align-items: start;
  justify-content: space-between;
`;

export const Desc = styled.p`
  color: #464646;
  font-size: 20px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 100;
  line-height: 130%;
`;

export const Discount = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 30px;
`;

export const Image = styled.img``;

export const Span = styled.span`
  color: #e9657e;
  font-size: 36px;
  font-family: Junegull;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Pct = styled.h4`
  color: #e86776;
  font-size: 80px;
  font-family: "Pacifico", cursive;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Arrow = styled.img`
  position: absolute;
  top: 167px;
  right: 130px;
`;

export const Right = styled.div`
  width: 400px;
  position: relative;
`;

export const Big = styled.img`
  position: absolute;
  bottom: -233px;
`;

export default Bonus;
