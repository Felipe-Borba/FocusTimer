import element from "./elements.js";
import chronometer from "./chronometer.js";
import { musics } from "./musics.js";
const timer = chronometer(element);
const music = musics();

element.timerBox.addEventListener("click", () => {
  const input = prompt("digite os minutos");
  const inputNumber = Number(input);

  if (inputNumber >= 0) {
    timer.setupTimer(inputNumber);
  } else {
    return;
  }
});

element.buttonPlay.addEventListener("click", () => {
  timer.countDown();
});

element.buttonStop.addEventListener("click", () => {
  timer.stop();
});

element.buttonPlus.addEventListener("click", () => {
  timer.increaseMinutes(5);
});

element.buttonMinus.addEventListener("click", () => {
  timer.increaseMinutes(-5);
});

element.buttonNature.addEventListener("click", () => {
  music.play("forest");
  selectOneBtn(element.buttonNature);
});

element.buttonFireplace.addEventListener("click", () => {
  music.play("firePit");
  selectOneBtn(element.buttonFireplace);
});

element.buttonCoffee.addEventListener("click", () => {
  music.play("coffee");
  selectOneBtn(element.buttonCoffee);
});

element.buttonRain.addEventListener("click", () => {
  music.play("rain");
  selectOneBtn(element.buttonRain);
});

function selectOneBtn(btn) {
  Object.entries(element).map((ele) => {
    ele[1].classList.remove("selected");
  });
  btn.classList.add("selected");
}
