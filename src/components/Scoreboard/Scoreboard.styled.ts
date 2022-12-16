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

  @media (max-width: 1279px) {
    width: 150px;
    height: 150px;
    padding-bottom: 20px;
  }

  @media (max-width: 820px) {
    width: 120px;
    height: 120px;

    .player {
      font-size: 24px;
    }

    .stone {
      font-size: 40px;
    }
  }

  @media (max-width: 767px) {
    width: 250px;
    padding-bottom: 100px;
    margin-top: -30px;
    margin-bottom: -30px;

    .player {
      font-size: 40px;
    }

    .stone {
      font-size: 60px;
    }
  }

  @media (max-width: 767px) {
    width: 250px;
    padding-bottom: 10px;

    .player {
      font-size: 24px;
    }

    .stone {
      font-size: 24px;
    }
  }
`;
