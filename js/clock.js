const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  //String형으로 변경 한 시간을 받아온 후 padStart = 스트링이 2자리가 아니면 앞에 0을 추가
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = hours + ":" + minutes + ":" + seconds;
}
getClock();
setInterval(getClock, 1000); //매 ms마다 지정한 함수를 호출시킨다
