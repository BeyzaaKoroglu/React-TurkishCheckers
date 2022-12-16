import styled from "styled-components";

export const Styled = styled.div`
  height: 70%;
  width: 70%;
  margin: 15%;
  border-radius: 50%;

  &.dama {
    border: 10px solid crimson;
    height: 50%;
    width: 50%;
    margin: 12%;
  }

  @media (max-width: 912px) {
    &.dama {
      border: 7px solid crimson;
    }
  }

  @media (max-width: 479px) {
    &.dama {
      border: 4px solid crimson;
    }
  }
`;
