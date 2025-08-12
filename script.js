// Seletores dos elementos
const carBody = document.getElementById("car-body");
const carWheels = document.getElementById("car-wheels");
const carSticker = document.getElementById("car-sticker");

const carColorInput = document.getElementById("car-color");
const wheelsSelect = document.getElementById("wheels");
const stickersSelect = document.getElementById("stickers");

const resetBtn = document.getElementById("reset-btn");

// Função para atualizar a cor do carro
carColorInput.addEventListener("input", () => {
  carBody.style.backgroundColor = carColorInput.value;
});

// Função para trocar as rodas
wheelsSelect.addEventListener("change", () => {
  carWheels.src = `assets/${wheelsSelect.value}`;
});

// Função para trocar o adesivo
stickersSelect.addEventListener("change", () => {
  carSticker.src = `assets/${stickersSelect.value}`;
});

// Função para resetar as customizações
resetBtn.addEventListener("click", () => {
  carBody.style.backgroundColor = "#ff0000"; // Cor inicial
  carWheels.src = "assets/wheel1.png"; // Rodas iniciais
  carSticker.src = "assets/sticker1.png"; // Adesivo inicial

  // Resetando os controles
  carColorInput.value = "#ff0000";
  wheelsSelect.value = "wheel1.png";
  stickersSelect.value = "sticker1.png";
});
