import styled from "styled-components";

export const Styled = styled.div`
  background-color: #b0b0b0;
  width: 200px;
  height: 200px;
  margin-top: 175px;
  text-align: center;

  &.shadow {
    box-shadow: 0px 0px 20px rgb(255, 100, 100);
  }

  .player {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 0;
  }

  .stone {
    font-size: 50px;
    font-weight: bold;
    margin-top: 10px;
  }
`;
