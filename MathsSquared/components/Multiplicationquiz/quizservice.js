const qBank = [
  {
    question: "12 x 13 ?  ",
    answers: ["173", "156", "112", "202"],
    correct: "156",
    questionId: "1"
  },
  {
    question: "99 x 88 ?  ",
    answers: ["8712", "8568", "9024", "6496"],
    correct: "8712",
    questionId: "2"
  },
  {
    question: "16 x 9 ?  ",
    answers: ["128", "184", "144", "202"],
    correct: "144",
    questionId: "3"
  },
  {
    question: "88 x 7 ?  ",
    answers: ["616", "684", "569", "702"],
    correct: "616",
    questionId: "4"
  },
  {
    question: "392 x 63 ?  ",
    answers: ["28348", "24696", "20228", "22632"],
    correct: "24696",
    questionId: "5"
  },
  {
    question: "183 x 4 ?  ",
    answers: ["790", "824", "688", "732"],
    correct: "732",
    questionId: "6"
  },
  {
    question: "13 x 6 ?  ",
    answers: ["78", "94", "72", "108"],
    correct: "78",
    questionId: "7"
  },
  {
    question: "8 x 4 ?  ",
    answers: ["44", "29", "53", "32"],
    correct: "32",
    questionId: "8"
  },
  {
    question: "179 x 3 ?  ",
    answers: ["537", "499", "603", "555"],
    correct: "537",
    questionId: "9"
  },
  {
    question: "180 x 21 ?  ",
    answers: ["4223", "4704", "4100", "3780"],
    correct: "3780",
    questionId: "10"
  },
  {
    question: "32 x 4 ?  ",
    answers: ["122", "98", "100", "128"],
    correct: "128",
    questionId: "11"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
