export const score_map = [
  {letter: "A", numeral: 5},
  {letter: "B", numeral: 4},
  {letter: "C", numeral: 3},
  {letter: "D", numeral: 2},
  {letter: "F", numeral: 1},
];

export function numerical_grade(letter) {
  let score = score_map.find(s => s.letter === letter)
  return score === undefined ? 1 : score.numeral
}

export function letter_grade(number) {
  let score = score_map.find(s => s.numeral === number)
  return score === undefined ? "F" : score.letter
}
