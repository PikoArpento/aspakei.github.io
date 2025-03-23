// 🔴 Rimuove gli elementi meteo precedenti
document.querySelectorAll(".more-snow").forEach(el => el.remove());

// 🔵 Crea il nuovo effetto neve
const snowContainer = document.createElement("div");
snowContainer.classList.add("more-snow", "weather-element");

document.body.appendChild(snowContainer);
