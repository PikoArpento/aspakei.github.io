//CONFIGURAZIONE DEL BIOMA 
const bioma = "montagna";  

//Meteo casuale basato sul bioma
function getMeteoCasuale() {
    const meteoBiomi = {
        deserto: ["sole", "sole", "vento", "tempesta"],
        montagna: ["neve", "nebbia", "sole", "vento"],
        foresta: ["pioggia", "sole", "nebbia", "nuvole"],
        città: ["pioggia", "sole", "nuvole", "nebbia", "tempesta"],
        costa: ["sole", "pioggia", "vento", "tempesta"]
    };

    const opzioni = meteoBiomi[bioma] || meteoBiomi["città"];
    return opzioni[Math.floor(Math.random() * opzioni.length)];
}

function generaDettagliMeteo() {
    if (Math.random() <= 0.5) {
        return {
            temperatura: ((Math.random() * 3 + 4) * -1).toFixed(1),
            umidita: (Math.random() * 40 + 40).toFixed(0),  // 40-80%
            vento: (Math.random() * 20 + 5).toFixed(1),  // 5-25 km/h
            pressione: (Math.random() * 30 + 990).toFixed(0)  // 990-1020 hPa
        }
    }
    else {
        return {
            temperatura: ((Math.random() * 3 + 4)).toFixed(1),
            umidita: (Math.random() * 40 + 40).toFixed(0),  // 40-80%
            vento: (Math.random() * 20 + 5).toFixed(1),  // 5-25 km/h
            pressione: (Math.random() * 30 + 990).toFixed(0)  // 990-1020 hPa
        };
    }
}

//Aggiorna il meteo attuale e carica il file corrispondente
function aggiornaMeteoAttuale() {
    let meteoAttuale = getMeteoCasuale();
    
    document.getElementById("meteo-attuale").textContent = `Meteo attuale: ${meteoAttuale}`;
    
    //Rimuove tutti gli script meteo esistenti
    document.querySelectorAll("script.weather-script").forEach(script => script.remove());

    // Rimuove tutti gli effetti visivi precedenti
    const elementsToRemove = [
        "#canvasLig", ".rain-container", ".more-snow",
        "#foglayer_01", "#foglayer_02", "#foglayer_03",
        ".clouds-1", ".clouds-2", ".clouds-3",
        ".sun", "#containerLeaf"
    ];
    
    elementsToRemove.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });

    //Cambia il file CSS della condizione meteo
    document.getElementById("weather-style").href = `${meteoAttuale}.css`;

    //Carica il file JavaScript della condizione meteo
    const script = document.createElement("script");
    script.src = `${meteoAttuale}.js`;
    script.classList.add("weather-script");
    script.defer = true;
    document.body.appendChild(script);
}

//Cambia il meteo ogni 3 ore
function aggiornaMeteo() {
    aggiornaMeteoAttuale();
}

function aggiornaDettagliMeteo() {
    const dettagli = generaDettagliMeteo();
    
    document.getElementById("temp").textContent = dettagli.temperatura;
    document.getElementById("umidita").textContent = dettagli.umidita;
    document.getElementById("vento").textContent = dettagli.vento;
    document.getElementById("pressione").textContent = dettagli.pressione;
}

aggiornaMeteo(); //Avvio iniziale
aggiornaDettagliMeteo();
setInterval(aggiornaMeteo, 10800000); // Aggiorna ogni 3 ore
