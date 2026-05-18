const quotes = [
  {
    quote: "이럴 때일수록 내 이미지를 위해선 그저 so cool한 척 하는게 최선",
    author: "빈지노 - Aqua Man",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;