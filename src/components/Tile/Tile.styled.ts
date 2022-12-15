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
`;
