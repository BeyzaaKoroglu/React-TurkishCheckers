import { BoardType } from "./types";

export const verticalAxis = ["8", "7", "6", "5", "4", "3", "2", "1"];
export const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const board: BoardType = [];

verticalAxis.forEach((v, i) => {
  horizontalAxis.forEach((h, j) => {
    (j + i) % 2 === 0
      ? board.push({
          id: `${v}${h}`,
          className: "white-tile",
          isFull: v === "2" || v === "3" || v === "6" || v === "7",
          stoneColor: `${
            v === "2" || v === "3"
              ? "white"
              : v === "6" || v === "7"
              ? "black"
              : ""
          }`,
          isDama: false,
        })
      : board.push({
          id: `${v}${h}`,
          className: "black-tile",
          isFull: v === "2" || v === "3" || v === "6" || v === "7",
          stoneColor: `${
            v === "2" || v === "3"
              ? "white"
              : v === "6" || v === "7"
              ? "black"
              : ""
          }`,
          isDama: false,
        });
  });
});
