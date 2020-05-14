const qBank = [
  {
    question: "5 + 6 ?  ",
    answers: ["13", "10", "11", "9"],
    correct: "11",
    questionId: "1"
  },
  {
    question: "14 + 8 ?  ",
    answers: ["20", "22", "18", "24"],
    correct: "22",
    questionId: "2"
  },
  {
    question: "49 + 15 ?  ",
    answers: ["57", "69", "64", "60"],
    correct: "64",
    questionId: "3"
  },
  {
    question: "32 + 27 ?  ",
    answers: ["59", "55", "61", "63"],
    correct: "59",
    questionId: "4"
  },
  {
    question: "78 + 26 ?  ",
    answers: ["99", "101", "109", "104"],
    correct: "104",
    questionId: "5"
  },
  {
    question: "31 + 11 ?  ",
    answers: ["42", "36", "39", "41"],
    correct: "42",
    questionId: "6"
  },
  {
    question: "11 + 6 ?  ",
    answers: ["17", "15", "21", "18"],
    correct: "17",
    questionId: "7"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
