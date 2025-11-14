let timerelm = document.querySelector(".timer");
let inputvalue = document.querySelector("#test-area");
let originText = document.querySelector("#origin-text p").innerHTML;
let textInputDiv = document.querySelector(".test-wrapper");
let resetbtn = document.querySelector("#reset");
let timershaype = [0, 0, 0, 0];
let boolianvlaue = false;
let interval;

function towzero(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}

function starttimer() {
  let timerscail =
    towzero(timershaype[0]) +
    ":" +
    towzero(timershaype[1]) +
    ":" +
    towzero(timershaype[2]);

  timerelm.innerHTML = timerscail;

  timershaype[3]++;

  timershaype[0] = Math.floor(timershaype[3] / 100 / 60);
  timershaype[1] = Math.floor(timershaype[3] / 100 - timershaype[0] * 60);
  timershaype[2] = Math.floor(
    timershaype[3] - timershaype[1] * 100 - timershaype[0] * 6000
  );
}

function Substringinputvaluetext() {
  let inputValueforSubstirng = inputvalue.value;
  let origintextSub = originText.substring(0, inputValueforSubstirng.length);

  if (inputValueforSubstirng == originText) {
    textInputDiv.style.borderColor = "green";
    clearInterval(interval);
  } else {
    if (inputValueforSubstirng == origintextSub) {
      textInputDiv.style.borderColor = "yellow";
    } else {
      textInputDiv.style.borderColor = "red";
    }
  }
}

function clicktoTheBtn() {
  clearInterval(interval);
  timershaype = [0, 0, 0, 0];
  boolianvlaue = false;
  inputvalue.value = "";
  interval = null;
  timerelm.innerHTML = "00:00:00";
  textInputDiv.style.borderColor = "gray";
}

function keypressOnTextInputDiv() {
  let inputtextvaluelenght = inputvalue.value.length;

  if (inputtextvaluelenght == 0 && !boolianvlaue) {
    boolianvlaue = true;
    interval = setInterval(starttimer, 10);
  }
}

resetbtn.addEventListener("click", clicktoTheBtn);
inputvalue.addEventListener("keypress", keypressOnTextInputDiv);
inputvalue.addEventListener("keyup", Substringinputvaluetext);
