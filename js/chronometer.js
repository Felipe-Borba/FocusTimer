export default function chronometer(element) {
  let timerTimeOut;

  function setMinutes(number) {
    if (typeof number === "number") {
      element.timerMinutes.textContent = String(number).padStart(2, "0");
    } else {
      throw new Error("tipo do valor não suportado");
    }
  }

  function getMinutes() {
    return Number(element.timerMinutes.textContent);
  }

  function setSeconds(number) {
    if (typeof number === "number") {
      element.timerSeconds.textContent = String(number).padStart(2, "0");
    } else {
      throw new Error("tipo do valor não suportado");
    }
  }

  function getSeconds() {
    return Number(element.timerSeconds.textContent);
  }

  function setupTimer(minutes) {
    setMinutes(minutes);
    setSeconds(0);
  }

  function isTimeOver() {
    if (getMinutes() <= 0 && getSeconds() <= 0) {
      return true;
    } else {
      false;
    }
  }

  function decreaseTime() {
    const second = getSeconds();
    const minute = getMinutes();

    if (second <= 0) {
      setSeconds(6);
      setMinutes(minute - 1);
    } else {
      setSeconds(second - 1);
    }
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      if (isTimeOver()) {
        console.log("cabou");
        stop();
        return;
      }

      decreaseTime();
      countDown();
    }, 1000);
  }

  function stop() {
    clearTimeout(timerTimeOut);
  }

  function increaseMinutes(number) {
    const minute = getMinutes() + number;
    if (minute < 0) {
      setMinutes(0);
    } else {
      setMinutes(minute);
    }
  }
  
  return {
    setupTimer,
    countDown,
    decreaseTime,
    stop,
    increaseMinutes,
  };
}
