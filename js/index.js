import element from "./elements.js";
import chronometer from "./chronometer.js";
const timer = chronometer(element);

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

music().play("coffee");

function music() {
  const audioKitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const audioForest = new Audio(
    "https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view/" //rota quebrada?
  );
  const audioRain = new Audio(
    "https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view"
  );
  const audioCoffee = new Audio("sounds/Cafeteria.wav");
  const audioFirePit = new Audio(
    "https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view"
  );

  audioKitchenTimer.loop = true;
  audioForest.loop = true;
  audioRain.loop = true;
  audioCoffee.loop = true;
  audioFirePit.loop = true;

  const musics = new Map([
    ["kitchenTimer", audioKitchenTimer],
    ["forest", audioForest],
    ["rain", audioRain],
    ["coffee", audioCoffee],
    ["firePit", audioFirePit],
  ]);

  function play(musicName) {
    musics.forEach((value, key) => {
      if (key === musicName) {
        value.play();
      } else {
        value.stop();
      }
    });
  }

  return {
    play,
  };
}
