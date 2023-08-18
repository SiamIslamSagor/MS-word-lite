document.getElementById("btn-bold").addEventListener("click", function () {
  document.getElementById("text-area").style.fontWeight = "bold";
});
document.getElementById("btn-italic").addEventListener("click", function () {
  document.getElementById("text-area").style.fontStyle = "italic";
});
document.getElementById("btn-underline").addEventListener("click", function () {
  document.getElementById("text-area").style.textDecoration = "underline";
});

document
  .getElementById("btn-align-left")
  .addEventListener("click", function () {
    // document.getElementById('text-area').style.fontWeight = 'bold';
    document.getElementById("text-area").style.textAlign = "left";
  });
document
  .getElementById("btn-align-center")
  .addEventListener("click", function () {
    document.getElementById("text-area").style.textAlign = "center";
  });
document
  .getElementById("btn-align-right")
  .addEventListener("click", function () {
    document.getElementById("text-area").style.textAlign = "right";
  });
document
  .getElementById("btn-align-justify")
  .addEventListener("click", function () {
    document.getElementById("text-area").style.textAlign = "justify";
  });

document
  .getElementById("btn-to-upper-case")
  .addEventListener("click", function () {
    const textArea = document.getElementById("text-area");
    const toUpperCaseText = textArea.value.toUpperCase();
    textArea.value = toUpperCaseText;
  });

function colorStyle(clickedElementId) {
  if (clickedElementId === "favcolor") {
    const colorCode = document.getElementById(clickedElementId).value;
    document.getElementById("text-area").style.color = colorCode;
  }

  if (clickedElementId === "change-font-size") {
    const numberValue = document.getElementById(clickedElementId).value;
    console.log(numberValue);
    const fontSize = numberValue + "px";
    console.log(fontSize);
    document.getElementById("text-area").style.fontSize = fontSize;
  }
}
