const maps = [
  {
    mapName: "dust ii",
    positions: [
      {
        posicao: "fundo",
        posicaoImg: "https://i.ibb.co/hX0hJCT/img-1.jpg",
      },
      {
        posicao: "escuro baixo",
        posicaoImg: "https://i.ibb.co/M2tnxGF/img-2.jpg",
      },
      {
        posicao: "base tr",
        posicaoImg: "https://i.ibb.co/8dFvzk0/img-3.jpg",
      },
      {
        posicao: "base ct",
        posicaoImg: "https://i.ibb.co/wc5Hxwj/img-4.jpg",
      },
    ],
  },
  {
    mapName: "mirage",
    positions: [
      {
        posicao: "fundomirage",
        posicaoImg: "https://i.ibb.co/hX0hJCT/img-1.jpg",
      },
      {
        posicao: "escuro baixomirage",
        posicaoImg: "https://i.ibb.co/M2tnxGF/img-2.jpg",
      },
      {
        posicao: "base trmirage",
        posicaoImg: "https://i.ibb.co/8dFvzk0/img-3.jpg",
      },
      {
        posicao: "base ctmirage",
        posicaoImg: "https://i.ibb.co/wc5Hxwj/img-4.jpg",
      },
    ],
  },
  {
    mapName: "cache",
    positions: [
      {
        posicao: "fundocache",
        posicaoImg: "https://i.ibb.co/hX0hJCT/img-1.jpgcache",
      },
      {
        posicao: "escuro baixocache",
        posicaoImg: "https://i.ibb.co/M2tnxGF/img-2.jpgcache",
      },
      {
        posicao: "base tr cache",
        posicaoImg: "https://i.ibb.co/hX0hJCTbase tr cache/img-1.jpgcache",
      },
      {
        posicao: "base ct cache",
        posicaoImg: "https://i.ibb.co/M2tnxGF/im-basect-g-2.jpgcache",
      },
    ],
  },
];

window.onload = () => {
  valueSelectedMap = parseInt(localStorage.getItem("valueSelectedMap"));
  valueSelectedDiff = parseInt(localStorage.getItem("valueSelectedDiff"));

  run();
};

// declaring variables, onEventListeners, ...
const verifyButton = document.querySelector(".verifyInput");
verifyButton.addEventListener("click", verifyInput);
const imgArea = document.querySelector(".positionName");
const inputArea = document.querySelector(".insertPositionName");
let points = 0;
let health;
let hintButton = document.querySelector(".hint");
const randomizeds = {};

// method fisher-yates shuffle, used to randomize the positions
const randomize = (arr) => {
  const copy = [...arr];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
};

function basicLogic() {
  const randomized = randomizeds[valueSelectedMap]?.length
    ? randomizeds[valueSelectedMap]
    : randomize(maps[valueSelectedMap].positions); // o array que será randomizado com base no <select> do usuario

  randomizeds[valueSelectedMap] = randomized;

  actualPosition = randomized.shift();
}

function run() {
  basicLogic();
  imgArea.src = actualPosition.posicaoImg;
}

function verifyInput() {
  if (inputArea.value != "") {
    if (inputArea.value == actualPosition.posicao) {
      points++;
      if (randomizeds[valueSelectedMap].length == 0) {
        window.location.href = "./end.html";

        console.log(points);
      }

      inputArea.value = "";
      run();
    } else {
      // aqui ele perde vida, configurar isso!
      console.log("errado!");
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o nome da posição!",
      width: 400,
      height: 300,
    });
  }
  // colocar somente depois da verificacao do input do usuario
}

// ver como q coloca pra poder clicar só 1x na dica e ser o 'posicao'
//let hint = actualPosition.posicao.replace(/\w/g, "*");
