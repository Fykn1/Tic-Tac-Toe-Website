const tiles = document.querySelectorAll(".tiles");

tiles[0].addEventListener("click", () => play(0));
tiles[1].addEventListener("click", () => play(1));
tiles[2].addEventListener("click", () => play(2));
tiles[3].addEventListener("click", () => play(3));
tiles[4].addEventListener("click", () => play(4));
tiles[5].addEventListener("click", () => play(5));
tiles[6].addEventListener("click", () => play(6));
tiles[7].addEventListener("click", () => play(7));
tiles[8].addEventListener("click", () => play(8));

function play(i) {
  console.log("tile ", i);
}