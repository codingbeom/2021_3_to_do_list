const player = {
  name: "kibeom",
  points: 10,
  fat: true,
  say: function (name, age) {
    console.log("Hello~ my name is " + name + " " + age);
  },
};
player.say("pila", 25);

console.log(player);

//console.log(player["name"]);
console.log(player.name);
//변수를 바꾸는 것이 아닌 Object를 변경하는 것은 const도 가능
player.fat = false;
console.log(player);
//object에 별도추가도 가능
player.lastName = "beomho";
player.points += 20;
console.log(player);

function sayHello(name, age) {
  console.log("Hello~ my name is " + name + " " + age);
}
sayHello("beomho", 10);

const age1 = parseInt(prompt("How old are you?"));
//parseInt == int타입으로 변환
//prompt == 입력가능한 알림창
console.log(isNaN(age1)); //isNaN 숫자가 아니면 true반환
if (isNaN(age1) || age1 < 0) {
  console.log("Please write a number");
} //true일때만 실행
else if (age1 < 18) {
  console.log("You are too young");
} else if (age1 >= 18 && age1 < 50) {
  console.log("You can drink Good");
} else if (age1 == 100) {
  //== 값만 같아도 true
  //=== 데이터 타입까지 같은지 확인
  console.log("is Back");
} else {
  //false일때만 실행
  console.log("Thank you for writing your age.");
}
//---------------------------------------------------
document.title = "/kibeom/"; //<title>변경
//id명을 받아 변수 t로 사용 가능
const t = document.getElementById("title");
//Html id명을 이용한다
console.log(title); //Html의 id명 사용
console.dir(t); //JS의 변수로 사용
title.innerText = "Got you!";
t.innerText = "Hey!";
//-------------------------------------------------------
const hellos = document.getElementsByClassName("hello"); //hellos에 class명 hello저장
console.log(hellos);

const h = document.getElementsByTagName("h1"); //Html Tag를 불러올 수 있음
console.log(h);

const toh = document.querySelector(".to h1");
//CSS처럼 사용가능 같은 클래스의 태그가있어도 첫번째만 리턴해줌
// .class명, #id명과 같이 사용가능
const tohAll = document.querySelectorAll(".to h1");
//배열 타입으로 저장해주고 index를 선언해서 사용가능
console.log(toh);
console.log(tohAll[1]);

function Go() {
  toh.classList.toggle("active");
}
toh.addEventListener("click", Go);
