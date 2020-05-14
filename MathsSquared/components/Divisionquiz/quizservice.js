const qBank = [
  {
    question: "81 ÷ 9 ?  ",
    answers: ["6", "9", "11", "7"],
    correct: "9",
    questionId: "1"
  },
  {
    question: "48 ÷ 6 ?  ",
    answers: ["7", "10", "8", "5"],
    correct: "8",
    questionId: "2"
  },
  {
    question: "69 ÷ 3 ?  ",
    answers: ["26", "20", "21", "23"],
    correct: "23",
    questionId: "3"
  },
  {
    question: "85 ÷ 5 ?  ",
    answers: ["17", "19", "13", "21"],
    correct: "17",
    questionId: "4"
  },
  {
    question: "316 ÷ 4 ?  ",
    answers: ["84", "68", "79", "81"],
    correct: "79",
    questionId: "5"
  },
  {
    question: "693 ÷ 9 ?  ",
    answers: ["86", "79", "77", "64"],
    correct: "77",
    questionId: "6"
  },
  {
    question: "162 ÷ 6 ?  ",
    answers: ["27", "33", "22", "30"],
    correct: "27",
    questionId: "7"
  },
  {
    question: "712 ÷ 2 ?  ",
    answers: ["350", "373", "332", "356"],
    correct: "356",
    questionId: "8"
  },
  {
    question: "2877 ÷ 7 ?  ",
    answers: ["411", "425", "425", "390"],
    correct: "411",
    questionId: "9"
  },
  {
    question: "1107 ÷ 9 ?  ",
    answers: ["145", "102", "123", "133"],
    correct: "123",
    questionId: "10"
  },
  {
    question: "150 ÷ 6 ?  ",
    answers: ["22", "25", "18", "21"],
    correct: "25",
    questionId: "11"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
