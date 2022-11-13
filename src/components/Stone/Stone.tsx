import { FC } from "react";
import { Styled } from "./Stone.styled";
import { StoneProps } from "./Stone.types";

const Stone: FC<StoneProps> = ({ color }) => {
  return <Styled style={{ backgroundColor: color }}></Styled>;
};

export default Stone;
