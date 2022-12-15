import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { board, verticalAxis, horizontalAxis } from "./initialValues";
import { GameType } from "./types";

const initialState: GameType = {
  board,
  selectedStone: "",
  player: "white",
  movableTiles: [],
  white: 16,
  black: 16,
  showModal: true,
  winner: "",
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

      if (state.board.find((tile) => tile.id === selectedStone)?.isDama) {
        for (let i = vIndex - 1; i > -1; i--) {
          if (
            state.board.find((tile) => tile.id === verticalAxis[i] + hAxis)
              ?.isFull
          ) {
            if (
              state.board.find((tile) => tile.id === verticalAxis[i] + hAxis)
                ?.stoneColor !== state.player &&
              !state.board.find(
                (tile) => tile.id === verticalAxis[i - 1] + hAxis
              )?.isFull
            )
              state.movableTiles.push({
                moveTo: verticalAxis[i - 1] + hAxis,
                delete: verticalAxis[i] + hAxis,
              });
            break;
          } else {
            state.movableTiles.push({
              moveTo: verticalAxis[i] + hAxis,
              delete: "",
            });
          }
        }
        for (let i = vIndex + 1; i < 8; i++) {
          if (
            state.board.find((tile) => tile.id === verticalAxis[i] + hAxis)
              ?.isFull
          ) {
            if (
              state.board.find((tile) => tile.id === verticalAxis[i] + hAxis)
                ?.stoneColor !== state.player &&
              !state.board.find(
                (tile) => tile.id === verticalAxis[i + 1] + hAxis
              )?.isFull
            )
              state.movableTiles.push({
                moveTo: verticalAxis[i + 1] + hAxis,
                delete: verticalAxis[i] + hAxis,
              });
            break;
          } else {
            state.movableTiles.push({
              moveTo: verticalAxis[i] + hAxis,
              delete: "",
            });
          }
        }
        for (let i = hIndex - 1; i > -1; i--) {
          if (
            state.board.find((tile) => tile.id === vAxis + horizontalAxis[i])
              ?.isFull
          ) {
            if (
              state.board.find((tile) => tile.id === vAxis + horizontalAxis[i])
                ?.stoneColor !== state.player &&
              !state.board.find(
                (tile) => tile.id === vAxis + horizontalAxis[i - 1]
              )?.isFull
            )
              state.movableTiles.push({
                moveTo: vAxis + horizontalAxis[i - 1],
                delete: vAxis + horizontalAxis[i],
              });
            break;
          } else {
            state.movableTiles.push({
              moveTo: vAxis + horizontalAxis[i],
              delete: "",
            });
          }
        }
        for (let i = hIndex + 1; i < 8; i++) {
          if (
            state.board.find((tile) => tile.id === vAxis + horizontalAxis[i])
              ?.isFull
          ) {
            if (
              state.board.find((tile) => tile.id === vAxis + horizontalAxis[i])
                ?.stoneColor !== state.player &&
              !state.board.find(
                (tile) => tile.id === vAxis + horizontalAxis[i + 1]
              )?.isFull
            )
              state.movableTiles.push({
                moveTo: vAxis + horizontalAxis[i + 1],
                delete: vAxis + horizontalAxis[i],
              });
            break;
          } else {
            state.movableTiles.push({
              moveTo: vAxis + horizontalAxis[i],
              delete: "",
            });
          }
        }
      } else {
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
      }
    },

    moveStone: (state, action: PayloadAction<string>) => {
      const selectedTile = state.movableTiles.find(
        (tile) => tile.moveTo === action.payload
      );
      let changePlayer = true;

      state.board = state.board.map((tile) => {
        if (tile.id === state.selectedStone) {
          tile.isFull = false;
          tile.stoneColor = "";
        } else {
          if (tile.id === selectedTile?.moveTo) {
            tile.isFull = true;
            tile.stoneColor = state.player;
            if (
              selectedTile.moveTo.startsWith("8") ||
              selectedTile.moveTo.startsWith("1")
            )
              tile.isDama = true;
            else {
              tile.isDama =
                state.board.find((tile) => tile.id === state.selectedStone)
                  ?.isDama || false;
            }
          } else {
            if (tile.id === selectedTile?.delete) {
              changePlayer = false;
              tile.isFull = false;
              tile.stoneColor = "";

              if (state.player === "white") {
                if (state.black === 1) {
                  state.showModal = true;
                  state.winner = "white";
                }
                if (state.black === 2 && state.white === 1) {
                  state.showModal = true;
                  state.winner = "nobody";
                }

                state.black = state.black - 1;
              } else {
                if (state.white === 1) {
                  state.showModal = true;
                  state.winner = "black";
                }

                if (state.white === 2 && state.black === 1) {
                  state.showModal = true;
                  state.winner = "nobody";
                }

                state.white = state.white - 1;
              }
            }
          }
        }

        return tile;
      });

      state.selectedStone = "";
      if (changePlayer) {
        state.player === "white"
          ? (state.player = "black")
          : (state.player = "white");
      }
      state.movableTiles = [];
    },

    handlePlayAgain: (state) => {
      state.board = board;
      state.player = "white";
      state.white = 16;
      state.black = 16;
      state.showModal = false;
    },

    handleStartGame: (state) => {
      state.showModal = false;
    },
  },
});

export const { selectStone, moveStone, handlePlayAgain, handleStartGame } =
  gameSlice.actions;
export default gameSlice.reducer;
