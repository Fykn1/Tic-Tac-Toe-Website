const tile = document.querySelectorAll(".tiles");

tile[0].addEventListener("click", () => play(0));
tile[1].addEventListener("click", () => play(1));
tile[2].addEventListener("click", () => play(2));
tile[3].addEventListener("click", () => play(3));
tile[4].addEventListener("click", () => play(4));
tile[5].addEventListener("click", () => play(5));
tile[6].addEventListener("click", () => play(6));
tile[7].addEventListener("click", () => play(7));
tile[8].addEventListener("click", () => play(8));

function play(i) {
  let btn = document.querySelector("#tile_" + (i + 1));

  if (is_player1() == true) {
    btn.innerHTML = `<p>O</p>`;
  
  } else {
    btn.innerHTML = `<p>X</p>`;
  }
}

let turn = 1;
function is_player1() {
  let is_player1 = true;
  
  if (turn % 2 == 0) {
    is_player1 = false;
  }
  turn++;

  return is_player1;
}
