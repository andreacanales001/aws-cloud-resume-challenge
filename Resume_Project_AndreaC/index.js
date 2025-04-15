const counter = document.querySelector(".counter-number");
async function updateCounter() {
let response = await fetch("https://fnvzrjgc7horkiip7ffv44imuu0uzhos.lambda-url.us-east-1.on.aws/")
let data = await response.json();
counter.innerHTML =  `views: ${data} `;
}
updateCounter();