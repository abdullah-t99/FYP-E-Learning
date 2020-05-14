const qBank = [
  {
    question: "1.569 + 9.2 ?  ",
    answers: ["10.943", "10.769", "10.643", "11.023"],
    correct: "10.769",
    questionId: "1"
  },
  {
    question: "5.64 + 4.25 ?  ",
    answers: ["10.21", "9.98", "8.82", "9.89"],
    correct: "9.89",
    questionId: "2"
  },
  {
    question: "10.86 + 8.99 ?  ",
    answers: ["19.85", "20.25", "19.45", "19.95"],
    correct: "19.85",
    questionId: "3"
  },
  {
    question: "25.456 + 10.123 ?  ",
    answers: ["36.487", "35.579", "35.563", "34.746"],
    correct: "35.579",
    questionId: "4"
  },
  {
    question: "101.86 + 44.14 ?  ",
    answers: ["143.68", "146", "145.05", "145"],
    correct: "146",
    questionId: "5"
  },
  {
    question: "6.035 + 15.17 ?  ",
    answers: ["22.315", "21.205", "21.505", "23.235"],
    correct: "21.205",
    questionId: "6"
  },
  {
    question: "8.2 + 4.03 + 5.15 ?  ",
    answers: ["17.38", "16.48", "17.54", "16.38"],
    correct: "17.38",
    questionId: "7"
  },
  {
    question: "176.895 + 3.104 ?  ",
    answers: ["178.998", "179.879", "179.999", "180.009"],
    correct: "179.999",
    questionId: "8"
  },
  {
    question: "89.197 + 0.981 ?  ",
    answers: ["90.601", "90.178", "90.165", "90.197"],
    correct: "90.178",
    questionId: "9"
  },
  {
    question: "5.12 + 2.53 + 4.891 ?  ",
    answers: ["12.947", "12.328", "13.032", "12.541"],
    correct: "12.541",
    questionId: "7"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
