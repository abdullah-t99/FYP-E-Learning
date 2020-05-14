const qBank = [
  {
    question: "1.65 - 0.09 ?  ",
    answers: ["1.56", "1.51", "1.49", "1.53"],
    correct: "1.56",
    questionId: "1"
  },
  {
    question: "8.65 - 3.97 ?  ",
    answers: ["4.87", "3.95", "4.68", "4.21"],
    correct: "4.68",
    questionId: "2"
  },
  {
    question: "12.06 - 15.34 ?  ",
    answers: ["-4.45", "-3.12", "-4.08", "-3.28"],
    correct: "-3.28",
    questionId: "3"
  },
  {
    question: "84.076 - 26.105 ?  ",
    answers: ["55.418", "58.946", "57.965", "57.971"],
    correct: "57.971",
    questionId: "4"
  },
  {
    question: "106.006 - 89.019 ?  ",
    answers: ["18.279", "15.357", "16.987", "15.847"],
    correct: "16.987",
    questionId: "5"
  },
  {
    question: "73.791 - 86.865  ?  ",
    answers: ["-13.074", "-13.163", "-12.289", "-13.071"],
    correct: "-13.074",
    questionId: "6"
  },
  {
    question: "62.195 - 8.732 ?  ",
    answers: ["52.912", "53.826", "53.497", "53.463"],
    correct: "53.463",
    questionId: "7"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
