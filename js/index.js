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
});

element.buttonFireplace.addEventListener("click", () => {
  music.play("firePit");
});

element.buttonCoffee.addEventListener("click", () => {
  music.play("coffee");
});

element.buttonRain.addEventListener("click", () => {
  music.play("rain");
});
