import { nuskhe } from "/butay-ke-nuskhe.js";

export function generateCSS(classes) {
  let css = "";
  const used = new Set();

  classes.forEach((cls) => {
    if (used.has(cls)) return;
    used.add(cls);

    // 🎨 BACKGROUND
    if (cls.startsWith("nuskhe-bg-")) {
      const color = cls.split("-")[2];
      if (nuskhe.colors[color]) {
        css += `.${cls} { background: ${nuskhe.colors[color]}; }\n`;
      }
    }

    // 🎨 TEXT
    if (cls.startsWith("nuskhe-text-")) {
      const color = cls.split("-")[2];
      if (nuskhe.colors[color]) {
        css += `.${cls} { color: ${nuskhe.colors[color]}; }\n`;
      }
    }

    // 🔘 BORDER RADIUS
    if (cls.startsWith("nuskhe-rounded-")) {
      const type = cls.split("-")[2];
      if (type === "full") {
        css += `.${cls} { border-radius: 50%; }\n`;
      }
    }

    // 🔲 BORDER
    if (cls.startsWith("nuskhe-border-")) {
      const type = cls.split("-")[2];
      const width = nuskhe.borderWidth[type];
      if (width) {
        css += `.${cls} { border: ${width} solid ${nuskhe.colors.border}; }\n`;
      }
    }

    // 📏 SIZE
    if (cls.startsWith("nuskhe-size-")) {
      const type = cls.split("-")[2];

      if (type === "body") {
        css += `.${cls} { width: ${nuskhe.size.bodyWidth}; height: ${nuskhe.size.bodyHeight}; }\n`;
      } else {
        const size = nuskhe.size[type];
        if (size) {
          css += `.${cls} { width: ${size}; height: ${size}; }\n`;
        }
      }
    }

    // 📍 POSITION
    if (cls === "nuskhe-relative") {
      css += `.${cls} { position: relative; }\n`;
    }

    if (cls === "nuskhe-absolute") {
      css += `.${cls} { position: absolute; }\n`;
    }

    // 📍 CENTER
    if (cls === "nuskhe-center-x") {
      css += `
            .${cls} {
              position: absolute;
              left: ${nuskhe.position.centerX};
              transform: ${nuskhe.transform.centerX};
            }\n`;
    }

    // 📍 GRID CENTER
    if (cls === "nuskhe-grid-center") {
      css += `.${cls} { display: grid; place-items: center; }\n`;
    }

    // 📍 OFFSETS
    if (cls.startsWith("nuskhe-top-")) {
      const val = cls.split("-")[2];
      if (nuskhe.offsets[val]) {
        css += `.${cls} { top: ${nuskhe.offsets[val]}; position: absolute; }\n`;
      }
    }

    if (cls.startsWith("nuskhe-bottom-")) {
      const val = cls.split("-")[2];
      if (nuskhe.offsets[val]) {
        css += `.${cls} { bottom: ${nuskhe.offsets[val]}; position: absolute; }\n`;
      }
    }

    if (cls.startsWith("nuskhe-left-")) {
      const val = cls.split("-")[2];
      if (nuskhe.offsets[val]) {
        css += `.${cls} { left: ${nuskhe.offsets[val]}; }\n`;
      }
    }

    // 🔥 SPECIAL SHAPES
    if (cls === "nuskhe-smile-shape") {
      css += `
            .${cls} {
              width: 20px;
              height: 10px;
              border-bottom: 3px solid #222;
              border-radius: 0 0 20px 20px;
              position: absolute;
            }\n`;
    }

    if (cls === "nuskhe-body-shape") {
      css += `
            .${cls} {
              width: 160px;
              height: 90px;
              border-radius: 100px 100px 0 0;
              position: absolute;
            }\n`;
    }

    // 👀 LEFT / RIGHT
    if (cls === "l") {
      css += `.l { left: 20px; }\n`;
    }

    if (cls === "r") {
      css += `.r { right: 20px; }\n`;
    }
  });

  return css;
}
