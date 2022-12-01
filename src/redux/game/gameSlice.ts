import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { board, verticalAxis, horizontalAxis } from "./initialValues";
import { GameType } from "./types";

const initialState: GameType = {
  board,
  selectedStone: "",
  player: "white",
  movableTiles: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    selectStone: (state, action: PayloadAction<string>) => {
      const selectedStone = action.payload;
      state.selectedStone = selectedStone;
      state.movableTiles = [];

      const vAxis = selectedStone[0];
      const hAxis = selectedStone[1];
      const vIndex = verticalAxis.indexOf(vAxis);
      const hIndex = horizontalAxis.indexOf(hAxis);

      if (state.player === "white") {
        if (vAxis !== "8") {
          const frontTile = state.board.find(
            (tile) => tile.id === verticalAxis[vIndex - 1] + hAxis
          );
          const nextTile = state.board.find(
            (tile) => tile.id === verticalAxis[vIndex - 2] + hAxis
          );
          if (frontTile?.isFull) {
            if (frontTile.stoneColor !== state.player && !nextTile?.isFull)
              state.movableTiles.push({
                moveTo: verticalAxis[vIndex - 2] + hAxis,
                delete: verticalAxis[vIndex - 1] + hAxis,
              });
          } else
            state.movableTiles.push({
              moveTo: verticalAxis[vIndex - 1] + hAxis,
              delete: "",
            });
        }
      } else {
        if (vAxis !== "1") {
          const backTile = state.board.find(
            (tile) => tile.id === verticalAxis[vIndex + 1] + hAxis
          );
          const nextTile = state.board.find(
            (tile) => tile.id === verticalAxis[vIndex + 2] + hAxis
          );
          if (backTile?.isFull) {
            if (backTile.stoneColor !== state.player && !nextTile?.isFull)
              state.movableTiles.push({
                moveTo: verticalAxis[vIndex + 2] + hAxis,
                delete: verticalAxis[vIndex + 1] + hAxis,
              });
          } else
            state.movableTiles.push({
              moveTo: verticalAxis[vIndex + 1] + hAxis,
              delete: "",
            });
        }
      }

      if (hAxis !== "a") {
        const leftTile = state.board.find(
          (tile) => tile.id === vAxis + horizontalAxis[hIndex - 1]
        );
        const nextTile = state.board.find(
          (tile) => tile.id === vAxis + horizontalAxis[hIndex - 2]
        );
        if (leftTile?.isFull) {
          if (leftTile.stoneColor !== state.player && !nextTile?.isFull)
            state.movableTiles.push({
              moveTo: vAxis + horizontalAxis[hIndex - 2],
              delete: vAxis + horizontalAxis[hIndex - 1],
            });
        } else
          state.movableTiles.push({
            moveTo: vAxis + horizontalAxis[hIndex - 1],
            delete: "",
          });
      }

      if (hAxis !== "h") {
        const rightTile = state.board.find(
          (tile) => tile.id === vAxis + horizontalAxis[hIndex + 1]
        );
        const nextTile = state.board.find(
          (tile) => tile.id === vAxis + horizontalAxis[hIndex + 2]
        );
        if (rightTile?.isFull) {
          if (rightTile.stoneColor !== state.player && !nextTile?.isFull)
            state.movableTiles.push({
              moveTo: vAxis + horizontalAxis[hIndex + 2],
              delete: vAxis + horizontalAxis[hIndex + 1],
            });
        } else
          state.movableTiles.push({
            moveTo: vAxis + horizontalAxis[hIndex + 1],
            delete: "",
          });
      }
    },

    moveStone: (state, action: PayloadAction<string>) => {
      const selectedTile = state.movableTiles.find(
        (tile) => tile.moveTo === action.payload
      );

      state.board = state.board.map((tile) => {
        if (tile.id === state.selectedStone) {
          tile.isFull = false;
          tile.stoneColor = "";
        } else {
          if (tile.id === selectedTile?.moveTo) {
            tile.isFull = true;
            tile.stoneColor = state.player;
          } else {
            if (tile.id === selectedTile?.delete) {
              tile.isFull = false;
              tile.stoneColor = "";
            }
          }
        }

        return tile;
      });

      state.selectedStone = "";
      state.player === "white"
        ? (state.player = "black")
        : (state.player = "white");
      state.movableTiles = [];
    },
  },
});

export const { selectStone, moveStone } = gameSlice.actions;
export default gameSlice.reducer;
