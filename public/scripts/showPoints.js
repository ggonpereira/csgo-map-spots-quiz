let points = parseInt(localStorage.getItem("points"));
let showPoints = document.querySelector(".totalPoints");

showPoints.innerHTML = `Você conseguiu ${points} pontos!`;
