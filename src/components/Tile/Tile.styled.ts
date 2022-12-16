import styled from "styled-components";

export const Styled = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid #202020;

  &.black-tile {
    background-color: #779556;
  }

  &.white-tile {
    background-color: #b0b0b0;
  }

  &.selected {
    background-color: red;
  }

  &.movable {
    background-color: green;
  }

  @media (max-width: 912px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 479px) {
    width: 35px;
    height: 35px;
  }
`;
