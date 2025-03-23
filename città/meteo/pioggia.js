const rainyContainer = document.getElementById("rainy-container");

function createRaindrop() {
  // Create a new raindrop element
  const raindrop = document.createElement("div");
  raindrop.classList.add("raindrop");

  // Generate a random number between 0 and the width of the container
  const x = Math.floor(Math.random() * rainyContainer.offsetWidth);

  // Set the position of the raindrop using the generated x value
  raindrop.style.left = `${x}px`;

  // Add the raindrop to the container
  rainyContainer.appendChild(raindrop);
}

// Create a new raindrop every 55 milliseconds
setInterval(createRaindrop, 25);
