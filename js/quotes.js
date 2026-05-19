const quotes = [
  {
    quote: "이럴 때일수록 내 이미지를 위해선 그저 so cool한 척 하는게 최선",
    author: "빈지노 - Aqua Man",
  },
  {
    quote: "I'll give you time and space, just know I'm not a phase",
    autho: "Daniel Caesar - always"
  },
  {
    quote: "Chances are I'll step out of line, but who knows?",
    autho: "Daniel Caesar - Who Knows"
  },
  {
    quote: "우린 같은 템포, 다른 노래인 거야",
    autho: "검정치마 - 한시 오분 (1:05)"
  },
  {
    quote: "실처럼 가늘 때에도 절대로 엉키지 않아",
    autho: "검정치마 - Big Love"
  },
  {
    quote: "마지막 폭죽이 터지는 그날에도 별로 슬퍼할 것 같진 않아",
    autho: "검정치마 - 폭죽과 풍선들"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;