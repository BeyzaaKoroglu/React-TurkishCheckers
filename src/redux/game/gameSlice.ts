import { createSlice } from "@reduxjs/toolkit";
import { board } from "./initialValues";
import { GameType } from "./types";

const initialState: GameType = {
  board,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
});

export default gameSlice.reducer;
