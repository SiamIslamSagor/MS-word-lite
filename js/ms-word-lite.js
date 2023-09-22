/////////////////////////////////////////////////////////////////////////

const textArea = document.getElementById("text-area");
const boldBtn = document.getElementById("btn-bold");
let boldBtnValue = false;

const italicBtn = document.getElementById("btn-italic");
let italicBtnValue = false;

const underlineBtn = document.getElementById("btn-underline");
let underlineBtnValue = false;

const leftBtn = document.getElementById("btn-align-left");
let leftBtnValue = false;

const centerBtn = document.getElementById("btn-align-center");
let centerBtnValue = false;

const rightBtn = document.getElementById("btn-align-right");
let rightBtnValue = false;

const justifyBtn = document.getElementById("btn-align-justify");
let justifyBtnValue = false;

const upperCaseBtn = document.getElementById("btn-to-upper-case");
let upperCaseBtnValue = false;

/////////////////////////////////////////////////////////////////////////

boldBtn.addEventListener("click", function () {
  boldBtnValue = !boldBtnValue;
  boldBtnValue
    ? (textArea.style.fontWeight = "bold")
    : (textArea.style.fontWeight = "normal");
});

italicBtn.addEventListener("click", function () {
  italicBtnValue = !italicBtnValue;
  italicBtnValue
    ? (textArea.style.fontStyle = "italic")
    : (textArea.style.fontStyle = "normal");
});

underlineBtn.addEventListener("click", function () {
  underlineBtnValue = !underlineBtnValue;
  underlineBtnValue
    ? (textArea.style.textDecoration = "underline")
    : textArea.style.removeProperty("text-decoration");
});

leftBtn.addEventListener("click", function () {
  textArea.style.textAlign = "left";
});
centerBtn.addEventListener("click", function () {
  textArea.style.textAlign = "center";
});
rightBtn.addEventListener("click", function () {
  textArea.style.textAlign = "right";
});
justifyBtn.addEventListener("click", function () {
  textArea.style.textAlign = "justify";
});

upperCaseBtn.addEventListener("click", function () {
  const upper = textArea.value.toUpperCase();
  const lower = textArea.value.toLowerCase();

  upperCaseBtnValue = !upperCaseBtnValue;
  upperCaseBtnValue ? (textArea.value = upper) : (textArea.value = lower);
});

function colorStyle(clickedElementId) {
  if (clickedElementId === "fav-color") {
    const colorCode = document.getElementById(clickedElementId).value;
    document.getElementById("text-area").style.color = colorCode;
  }

  if (clickedElementId === "change-font-size") {
    const numberValue = document.getElementById(clickedElementId).value;
    const fontSize = numberValue + "px";
    document.getElementById("text-area").style.fontSize = fontSize;
  }
}
