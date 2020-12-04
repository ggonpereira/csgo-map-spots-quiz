const startButton = document.querySelector(".playButton");
startButton.addEventListener("click", getInfoValues);

function getInfoValues() {
  const selectsArea = document.querySelector(".selects-area");
  const selectElementMap = document.querySelector("#mapSelector");
  const selectElementDiff = document.querySelector("#diffSelector");

  valueSelectedMap =
    selectElementMap.options[selectElementMap.selectedIndex].value;
  valueSelectedDiff =
    selectElementDiff.options[selectElementDiff.selectedIndex].value;

  if (valueSelectedMap == "" || valueSelectedDiff == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha todas as opções!",
      width: 400,
      height: 300,
    });
  } else {
    localStorage.setItem("valueSelectedMap", valueSelectedMap);
    localStorage.setItem("valueSelectedDiff", valueSelectedDiff);

    window.location.href = "../game.html";
  }
}
