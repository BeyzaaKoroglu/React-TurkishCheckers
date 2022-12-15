import styled from "styled-components";

export const Styled = styled.div`
  position: absolute;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100vw;
  height: 100vh;

  div {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    min-height: 170px;
    background-color: white;
    border: 2px solid #708849;
    text-align: center;

    button {
      width: 200px;
      height: 50px;
      background-color: #779556;
      border: 2px solid #708849;
      border-radius: 25px;
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 30px;
    }
  }
`;
