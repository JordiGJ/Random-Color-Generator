// get elements
const main = document.querySelector("main");

// variables
// Hexadecimal characters
const hexadecimalCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

// create and append 32 divs into main section. Including colorP,i and eventListeners
for (let i = 0; i < 32; i++) {
  // create elements
  const div = document.createElement("div");
  const colorP = document.createElement("p");
  const ic = document.createElement("i");
  const tooltip = document.createElement("p");
  // adding classes
  tooltip.classList.add("tooltip");
  colorP.classList.add("colorP");
  ic.classList.add("far");
  ic.classList.add("fa-copy");
  ic.classList.add("fa-2x");
  // generate random color
  const color = randomHexColor();
  // color to background-color
  div.style.backgroundColor = color;
  // set text to p's
  colorP.textContent = color;
  tooltip.textContent = "Copy to Clipboard";
  // append elements
  div.append(colorP);
  div.append(ic);
  div.append(tooltip);
  main.append(div);
  // set attribute so can be used to the clipboard
  ic.setAttribute("info", `${color}`);
  // eventListener
  ic.addEventListener("click", () => {
    const info = ic.getAttribute("info");
    navigator.clipboard.writeText(info);
    colorP.textContent = "Color copied!";
    setTimeout(() => (colorP.textContent = color), 1200);
  });
}

// functions
// create Hexdecimal color
function randomHexColor() {
  let color = "#";
  const length = hexadecimalCharacters.length;
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * length);
    color += hexadecimalCharacters[randomNum];
  }
  return color;
}
