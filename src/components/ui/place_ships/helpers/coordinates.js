const COORDINATES = [];
const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
LETTERS.map((letter) => {
  NUMBERS.map((number) => {
    COORDINATES.push(`${letter}${number}`);
  });
});

export default COORDINATES;
