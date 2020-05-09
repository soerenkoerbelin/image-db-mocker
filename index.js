const fs = require("fs");

const dirToReadFrom = "./../port/public/img";
const dirToPutJson = "./../port/src/PhotoGallery"

function shuffleImages(images) {
  return images.sort(() => Math.random() - 0.5);
}

// read files from dir
let images = fs.readdirSync(dirToReadFrom);
// shuffle images randomly
images = shuffleImages(images);

// creates db arr
const db = [];

images.forEach((img) => {
  db.push({ src: "./img/" + img });
});

const imagesJson = JSON.stringify(db);

fs.writeFileSync(dirToPutJson + "/images.json", imagesJson, "utf8", function (err) {
  if (err) throw err;
  console.log("complete");
});
