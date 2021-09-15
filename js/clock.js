const clock = document.querySelector("h2#clock");
const date = new Date();
const yearid = document.querySelector("#year");
const monthid = document.querySelector("#month");
const daysid = document.querySelector("#day");
const dailyid = document.querySelector("#daily");
const dailyArr = ["일", "월", "화", "수", "목", "금", "토"];

function getClock() {
  const hours = String(date.getHours()).padStart(2, "0");
  //String형으로 변경 한 시간을 받아온 후 padStart = 스트링이 2자리가 아니면 앞에 0을 추가
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = hours + ":" + minutes + ":" + seconds;
}
getClock();
setInterval(getClock, 1000); //매 ms마다 지정한 함수를 호출시킨다

function getDay() {
  const year = String(date.getFullYear());
  yearid.innerText = `${year}년`;
  const month = String(date.getMonth()).padStart(2, "0");
  monthid.innerText = `${month}월`;
  const days = String(date.getDay()).padStart(2, "0");
  daysid.innerText = `${days}일`;
  const daily = dailyArr[date.getDay()];
  dailyid.innerText = `${daily}요일`;
}
getDay();
