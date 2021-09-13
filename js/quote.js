const quotes = [
  {
    명언: "단순함이야말로 최상의 정교함이다",
    출처: "레오나로드 다빈치",
  },
  { 명언: "결국 사소한 것이 커다란 차이를 만들어 낸다", 출처: "디오도어 루빈" },
  {
    명언: "자신감은 위대한 과업의 첫번째 필수조건이다",
    출처: "사무엘 존슨",
  },
  {
    명언: "한번도 실수한 적이 없는 사람은 한번도 새로운 것에 도전해 본적 없는 사람이다",
    출처: "알버트 아인슈타인",
  },
  {
    명언: "인간이 불행한 이유는 자신이 행복하다는 사실을 모르기 때문이다",
    출처: "표도르 도스토옙스키",
  },
  {
    명언: "세상에서 가장 현명한 사람은 모든 사람으로부터 배우는 사람이다",
    출처: "탈무드",
  },
  {
    명언: "한때는 불가능하다고 생각한 것이 결국에는 가능한 것이 된다",
    출처: "K.오브라이언",
  },
  {
    명언: "삶이 있는 한 희망은 있다",
    출처: "키케로",
  },
  {
    명언: "직업에서 행복을 찾아라, 아니면 행복이 무엇인지 절대 모를 것이다",
    출처: "엘버트 허버드",
  },
  {
    명언: "피할수 없으면 즐겨라",
    출처: "로버트 엘리엇",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //0~9

quote.innerText = todaysQuote.명언;
author.innerText = todaysQuote.출처;
