export const score_map = [
  {letter: "A", numeral: 10},
  {letter: "A-", numeral: 9},
  {letter: "B", numeral: 8},
  {letter: "B-", numeral: 7},
  {letter: "C", numeral: 6},
  {letter: "C-", numeral: 5},
  {letter: "D", numeral: 4},
  {letter: "D-", numeral: 3},
  {letter: "F", numeral: 2},
  {letter: "F-", numeral: 1},
];

export function numerical_grade(letter) {
  return (score_map.find(s => s.letter === letter)).numeral
}

export function letter_grade(number) {
  return (score_map.find(s => s.numeral === number)).letter
}
