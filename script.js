const moonIconBtn = document.getElementById("moon-icon");
const body = document.getElementById("body")

moonIconBtn.addEventListener("click", () => {
    body.classList.contains("dark") ? body.classList.remove("dark") : body.classList.add("dark");
    
})