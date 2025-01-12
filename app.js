const textInput = document.querySelector(".textInput");
const time = document.querySelector(".time");
const nowScore = document.querySelector(".nowScore");
const highScore = document.querySelector(".highScore");
const select = document.querySelector("#select");
const randomWord = document.querySelector(".randomWord");
const modal = document.querySelector(".modal");
const modalBack = document.querySelector(".modal-back");
const result = document.querySelector(".result");
const tryBtn = document.querySelector(".tryBtn");
const words = [
  "abreact",
  "abreacted",
  "abreacting",
  "abreaction",
  "abreactions",
  "paltrier",
  "paltriest",
  "paltrily",
  "paltriness",
  "paltrinesses",
  "paltry",
  "paludal",
  "paludism",
  "shiv",
  "shiva",
  "shivah",
  "shivahs",
  "shivaree",
  "shivareed",
  "shivareeing",
];
select.value = localStorage.getItem("level")
  ? localStorage.getItem("level")
  : "easy";
  select.addEventListener("change", () => {
    if (select.value == "easy") {
      second = second + 5;
      localStorage.setItem("level", "easy");
    } else if (select.value == "medium") {
      second = second + 3;
      localStorage.setItem("level", "medium");
    } else {
      second = second + 1;
      localStorage.setItem("level", "hard");
    }
  });
var second = 10;
time.textContent = second;
const timeFunc = () => {
  setInterval(() => {
    if (second > 0) {
      second--;
      time.textContent = second;
    }
  }, 1000);
};
timeFunc();
const randomFunc = () => {
  randomWord.textContent = words[Math.floor(Math.random() * words.length)];
};
randomFunc();

var myScore = 0;
var hightScore = localStorage.getItem("hightScore")
  ? localStorage.getItem("hightScore")
  : 0;
highScore.textContent = `Hight Score: ${hightScore}`;
nowScore.textContent = `Score: ${myScore}`;
textInput.addEventListener("input", () => {
  if (textInput.value == randomWord.textContent) {
    myScore = myScore + 1;
    randomFunc();
    textInput.value = "";
    nowScore.textContent = `Score: ${myScore}`;
    if (select.value == "easy") {
      second = second + 5;
      localStorage.setItem("level", "easy");
    } else if (select.value == "medium") {
      second = second + 3;
      localStorage.setItem("level", "medium");
    } else {
      second = second + 1;
      localStorage.setItem("level", "hard");
    }
  }
});
setInterval(() => {
  if (time.textContent == 0) {
    modal.classList.add("modal-open");
    modalBack.style.display = "block";
    result.textContent = `Score: ${myScore}`;
    tryBtn.addEventListener("click", () => {
      modal.classList.remove("modal-open");
      modalBack.style.display = "none";
      myScore = 0;
      nowScore.textContent = `Score: 0`;
      second = 10;
      randomFunc();
    });
    if (hightScore < myScore) {
      highScore.textContent = `Hight Score: ${myScore}`;
      localStorage.setItem("hightScore", myScore);
    }
  }
}, 1000);

