import element from "./elements.js";
import chronometer from "./chronometer.js";
import { musics } from "./musics.js";
const timer = chronometer(element);
const music = musics();
timer.setTimeOverCallback(() => music.play("kitchenTimer"));

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
  music.play("forest").loop = true;
  selectOneBtn(element.buttonNature);
});

element.buttonFireplace.addEventListener("click", () => {
  music.play("firePit").loop = true;
  selectOneBtn(element.buttonFireplace);
});

element.buttonCoffee.addEventListener("click", () => {
  music.play("coffee").loop = true;
  selectOneBtn(element.buttonCoffee);
});

element.buttonRain.addEventListener("click", () => {
  music.play("rain").loop = true;
  selectOneBtn(element.buttonRain);
});

function selectOneBtn(btn) {
  Object.entries(element).map((ele) => {
    ele[1].classList.remove("selected");
  });
  btn.classList.add("selected");
}
