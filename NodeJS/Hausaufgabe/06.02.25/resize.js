const sharp = require("sharp");

sharp("input.jpg")
  .resize({ width: 300 })
  .toFile("output.jpg")
  .then((data) => {
    // 100 pixels wide, auto-scaled height
  });
