AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease",
});

// const textOnShirt = document.getElementById("textOnShirt");

// const textbox = document.getElementById("textbox");

function OnShirt() {
  var textbox = document.getElementById("textbox");
  var textOnShirt = document.getElementById("textOnShirt");
  textOnShirt.innerHTML = textbox.value;
}

function shirtColor1() {
  document.getElementById("shirt").src = `black.png`;
}
function shirtColor2() {
  document.getElementById("shirt").src = `green.png`;
}
function shirtColor3() {
  document.getElementById("shirt").src = `gray.png`;
}
function shirtColor4() {
  document.getElementById("shirt").src = `purple.png`;
}
function shirtColor5() {
  document.getElementById("shirt").src = `yellow.png`;
}

function italictext() {
  var textOnShirt = document.getElementById("textOnShirt");
  if (textOnShirt.style.textDecoration === "italic") {
    textOnShirt.style.textDecoration = "normal";
  } else {
    textOnShirt.style.textDecoration = "italic";
  }
}

function changeColor() {
  var clrbox = document.getElementById("clrbox").value;
  textOnShirt.style.color = clrbox;
}

function boldtext() {
  var textOnShirt = document.getElementById("textOnShirt");
  if (textOnShirt.style.fontWeight === `bold`) {
    textOnShirt.style.fontWeight = `normal`;
  } else {
    textOnShirt.style.fontWeight = `bold`;
  }
}
function alignLeft() {
  if (textOnShirt.style.textAlign === `left`) {
    textOnShirt.style.textAlign = `normal`;
  } else {
    textOnShirt.style.textAlign = `left`;
  }
}
function alignCenter() {
  if (textOnShirt.style.textAlign === `center`) {
    textOnShirt.style.textAlign = `normal`;
  } else {
    textOnShirt.style.textAlign = `center`;
  }
}
function alignRight() {
  if (textOnShirt.style.textAlign === `right`) {
    textOnShirt.style.textAlign = `normal`;
  } else {
    textOnShirt.style.textAlign = `right`;
  }
}

function updateFontSizeBox() {
  var textOnShirt = document.getElementById("textOnShirt");
  var pxBox = document.getElementById("pxbox");

  // Get the current font size and update the content of the pxbox
  var currentFontSize = parseInt(window.getComputedStyle(textOnShirt).fontSize);
  pxBox.textContent = currentFontSize + "px";
}

function minusFont() {
  var textOnShirt = document.getElementById("textOnShirt");

  var currentFontSize = parseInt(window.getComputedStyle(textOnShirt).fontSize);

  if (currentFontSize > 5) {
    textOnShirt.style.fontSize = currentFontSize - 1 + "px";
  }
  updateFontSizeBox();
}

function plusFont() {
  var textOnShirt = document.getElementById("textOnShirt");
  const pxbox = document.getElementById("pxbox").innerHTML;

  var currentFontSize = parseInt(window.getComputedStyle(textOnShirt).fontSize);

  textOnShirt.style.fontSize = currentFontSize + 2 + "px";
  updateFontSizeBox();
}
