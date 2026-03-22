import { generateCSS } from "./makeup-artist.js";

let styleTag = null;

function extractClasses() {
  const elements = document.querySelectorAll("*");
  const classSet = new Set();

  elements.forEach(el => {
    el.classList.forEach(cls => {
      if (cls.startsWith("nuskhe-") || cls === "l" || cls === "r") {
        classSet.add(cls);
      }
    });
  });

  return [...classSet];
}

function applyCSS(css) {
  if (!styleTag) {
    styleTag = document.createElement("style");
    document.head.appendChild(styleTag);
  }

  styleTag.innerHTML = css;
}

function butyParler() {
  const classes = extractClasses();
  const css = generateCSS(classes);
  applyCSS(css);
}

butyParler();