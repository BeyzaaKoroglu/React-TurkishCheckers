import styled from "styled-components";

export const Styled = styled.div`
  width: 600px;
  height: 600px;
  margin: 75px 100px;
  display: grid;
  grid-template-columns: repeat(8, 75px);
  grid-template-rows: repeat(8, 75px);

  @media (max-width: 1279px) {
    margin: 75px 25px;
  }

  @media (max-width: 912px) {
    margin: 75px 15px;
    width: 480px;
    height: 480px;
    grid-template-columns: repeat(8, 60px);
    grid-template-rows: repeat(8, 60px);
  }

  @media (max-width: 479px) {
    width: 280px;
    height: 280px;
    grid-template-columns: repeat(8, 35px);
    grid-template-rows: repeat(8, 35px);
  }
`;
