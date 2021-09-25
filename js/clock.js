const clock = document.querySelector("#date-clock");
const date = document.querySelector("#date");
const dailyArr = ["일", "월", "화", "수", "목", "금", "토"];

function getClock() {
  const data = new Date();
  const hours = String(data.getHours()).padStart(2, "0");
  //String형으로 변경 한 시간을 받아온 후 padStart = 스트링이 2자리가 아니면 앞에 0을 추가
  const minutes = String(data.getMinutes()).padStart(2, "0");
  const seconds = String(data.getSeconds()).padStart(2, "0");
  const daily = dailyArr[data.getDay()];
  clock.innerText = `${hours} : ${minutes} : ${seconds} / ${daily}요일`;
}

function getDay() {
  const data = new Date();
  const year = String(data.getFullYear());
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const days = String(data.getDate()).padStart(2, "0");
  date.innerText = `${year}년 ${month}월 ${days}일`;
}

getDay();
getClock();
setInterval(getDay, 1100);
setInterval(getClock, 1000); //매 ms마다 지정한 함수를 호출시킨다
