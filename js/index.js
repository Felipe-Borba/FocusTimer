import element from "./elements.js";
import chronometer from "./chronometer.js";
import { musics } from "./musics.js";
const timer = chronometer(element);
const music = musics();

timer.setTimeOverCallback(() => {
  removeSelectedClass();
  music.play("kitchenTimer");
});

function selectOneBtn(btn) {
  removeSelectedClass();
  btn.classList.add("selected");
}

function removeSelectedClass() {
  Object.entries(element).map((ele) => {
    ele[1].classList.remove("selected");
  });
}

element.timerBox.addEventListener("click", () => {
  const input = prompt("digite os minutos");
  const inputNumber = Number(input);

  if (inputNumber >= 0) {
    timer.setupTimer(inputNumber);
  } else {
    return;
  }
});

element.buttonLightMode.addEventListener('click', () => {
  element.buttonLightMode.classList.add("hide");
  element.buttonDarkMode.classList.remove("hide");
  element.root.classList.add('dark')
})

element.buttonDarkMode.addEventListener("click", () => {
  element.buttonDarkMode.classList.add("hide");
  element.buttonLightMode.classList.remove("hide");
  element.root.classList.remove("dark");
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
  const sound = music.play("forest")
  sound.loop = true;
  sound.volume = element.inputNatureVolume.value;
  
  selectOneBtn(element.buttonNature);
});

element.buttonFireplace.addEventListener("click", () => {
  const sound = music.play("firePit")
  sound.loop = true;
  sound.volume = element.inputFirePlaceVolume.value;

  selectOneBtn(element.buttonFireplace);
});

element.buttonCoffee.addEventListener("click", () => {
  const sound = music.play("coffee")
  sound.loop = true;
  sound.volume = element.inputCoffeeVolume.value;

  selectOneBtn(element.buttonCoffee);
});

element.buttonRain.addEventListener("click", () => {
  const sound = music.play("rain")
  sound.loop = true;
  sound.volume = element.inputRainVolume.value;

  selectOneBtn(element.buttonRain);
});
