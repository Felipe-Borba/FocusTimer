export function musics() {
  const myAudio = new Audio();

  const audioKitchenTimer = "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true";

  const audioForest = "https://github.com/Felipe-Borba/FocusTimer/blob/master/sounds/Floresta.wav?raw=true"; //rota quebrada?

  const audioRain = "https://github.com/Felipe-Borba/FocusTimer/blob/master/sounds/Chuva.wav?raw=true";

  const audioCoffee = "https://github.com/Felipe-Borba/FocusTimer/blob/master/sounds/Cafeteria.wav?raw=true";

  const audioFirePit = "https://github.com/Felipe-Borba/FocusTimer/blob/master/sounds/Lareira.wav?raw=true";

  const musics = new Map([
    ["kitchenTimer", audioKitchenTimer],
    ["forest", audioForest],
    ["rain", audioRain],
    ["coffee", audioCoffee],
    ["firePit", audioFirePit],
  ]);

  function play(key) {
    myAudio.setAttribute("src", musics.get(key));
    myAudio.play();
    return myAudio;
  }

  return {
    play,
  };
}
