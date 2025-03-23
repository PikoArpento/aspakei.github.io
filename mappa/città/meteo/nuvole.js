// 🔴 Rimuove gli elementi meteo precedenti
document.querySelectorAll(".clouds-1, .clouds-2, .clouds-3").forEach(el => el.remove());

// 🔵 Crea le nuove nuvole
for (let i = 1; i <= 3; i++) {
    const cloud = document.createElement("div");
    cloud.classList.add(`clouds-${i}`, "weather-element");
    document.body.appendChild(cloud);
}
