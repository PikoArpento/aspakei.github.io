// 🔴 Rimuove gli elementi meteo precedenti
document.querySelectorAll("#foglayer_01, #foglayer_02, #foglayer_03").forEach(el => el.remove());

// 🔵 Crea i nuovi strati di nebbia
for (let i = 1; i <= 3; i++) {
    const fogLayer = document.createElement("div");
    fogLayer.id = `foglayer_0${i}`;
    fogLayer.classList.add("fog", "weather-element");

    const image1 = document.createElement("div");
    image1.classList.add("image01");

    const image2 = document.createElement("div");
    image2.classList.add("image02");

    fogLayer.appendChild(image1);
    fogLayer.appendChild(image2);
    document.body.appendChild(fogLayer);
}
