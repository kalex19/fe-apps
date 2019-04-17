const questions = [
  {
    "id": 1,
    "question": "Which of the following is an ES5 variable declaration: var, let, or const?",
    "image": null,
    "answer": "var"
  },
  {
    "id": 2,
    "question": "Which of the following is a non-mutable variable declaration: var, let, or const?",
    "image": null,
    "answer": "const"
  },
  {
    "id": 3,
    "question": "Which of the following is a mutable ES6 variable declaration: var, let, or const?",
    "image": null,
    "answer": "let"
  },
  {
    "id": 4,
    "question": "Excluding Eval Scope, how many levels of scope are there: two, three, four, or five?",
    "image": null,
    "answer": "three"
  },
  {
    "id": 5,
    "question": "What level of scope is default: block, functional, or global?",
    "image": null,
    "answer": "global"
  },
  {
    "id": 6,
    "question": "What is traveresed when a variable is referenced in a block of code but not declared within it?",
    "image": null,
    "answer": "scope chain"
  },
  {
    "id": 7,
    "question": "Do child scopes have access to parent scopes? Yes or No",
    "image": null,
    "answer": "Yes"
  },
  {
    "id": 8,
    "question": "Do parent scopes have access to child scopes? Yes or No",
    "image": null,
    "answer": "No"
  },
  {
    "id": 9,
    "question": "Which of the following does not adhere to block scope: var, let, or const?",
    "image": null,
    "answer": "var"
  },
  {
    "id": 10,
    "question": "Within block scope, what would a console log placed before an ES6 variable declaration return?",
    "image": null,
    "answer": "reference error"
  },
  {
    "id": 11,
    "question": "Within block scope, what would a console log placed prior to an ES5 variable declaration return?",
    "image": null,
    "answer": "undefined"
  },
  {
    "id": 12,
    "question": "If there is a block level variable referenced, but no declaration found after the scope chain is traversed, what scope level does JavaScript declare the variable for you?",
    "image": null,
    "answer": "global"
  },
  {
    "id": 13,
    "question": "Which console log will run first?",
    "image": "https://i.imgur.com/QTYYo7b.png",
    "answer": "C"
  },
  {
    "id": 14,
    "question": "Which console log will run second?",
    "image": "https://i.imgur.com/QTYYo7b.png",
    "answer": "A"
  },
  {
    "id": 15,
    "question": "Which console log will run third?",
    "image": "https://i.imgur.com/QTYYo7b.png",
    "answer": "B"
  },
  {
    "id": 16,
    "question": "What will be logged first?",
    "image": "https://i.imgur.com/QTYYo7b.png",
    "answer": "burger"
  },
  {
    "id": 17,
    "question": "What will be logged second?",
    "image": "https://i.imgur.com/QTYYo7b.png",
    "answer": "pizza"
  },
  {
    "id": 18,
    "question": "What will be logged third?",
    "image": "https://i.imgur.com/QTYYo7b.png",
    "answer": "burger"
  },
  {
    "id": 19,
    "question": "Which console log will run first?",
    "image": "https://i.imgur.com/yyqLxpA.png",
    "answer": "E"
  },
  { 
    "id": 20,
    "question": "Which console log will run second?",
    "image": "https://i.imgur.com/yyqLxpA.png",
    "answer": "C"
  },
  {
    "id": 21,
    "question": "Which console log will run third?",
    "image": "https://i.imgur.com/yyqLxpA.png",
    "answer": "D"
  },
  { 
    "id": 22,
    "question": "Which console log will run fourth?",
    "image": "https://i.imgur.com/yyqLxpA.png",
    "answer": "A"
  },
  {
    "id": 23,
    "question": "Which console log will run fifth?",
    "image": "https://i.imgur.com/yyqLxpA.png",
    "answer": "B"
  },
  { 
    "id": 24,
    "question": "Which console log will run sixth?",
    "image": "https://i.imgur.com/yyqLxpA.png",
    "answer": "F"
  },
  { 
    "id": 25,
    "question": "What will be logged first?",
    "image": "https://i.imgur.com/yyqLxpA.png",
    "answer": "Broncos"
  },
  {
    "id": 26,
    "question": "What will be logged second?",
    "image": "https://i.imgur.com/yyqLxpA.png",
    "answer": "Browns"
  },
  {
    "id": 27,
    "question": "What will be logged third?",
    "image": "https://i.imgur.com/yyqLxpA.png",
    "answer": "Rams"
  },
  {
    "id": 28,
    "question": "What will be logged fourth?",
    "image": "https://i.imgur.com/yyqLxpA.png",
    "answer": "Broncos"
  },
  {
    "id": 29,
    "question": "What will be logged fifth?",
    "image": "https://i.imgur.com/yyqLxpA.png",
    "answer": "Cowboys"
  },
  {
    "id": 30,
    "question": "What will be logged sixth?",
    "image": "https://i.imgur.com/yyqLxpA.png",
    "answer": "Cowboys"
  }
]

module.exports = {
  questions
} 
