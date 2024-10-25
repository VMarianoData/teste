document.getElementById("actionButton").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.classList.toggle("show");
    if (message.classList.contains("show")) {
        message.textContent = "Obrigado por clicar!";
    } else {
        message.textContent = "";
    }
});
