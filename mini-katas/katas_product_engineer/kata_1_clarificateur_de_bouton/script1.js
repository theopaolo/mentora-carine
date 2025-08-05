button = document.querySelector("button");

function changeButton() {
    button.addEventListener("click", () => {
        button.innerText = "Envoi en cours";
        button.classList.add("ongoingButton");
        button.disabled = true;
        setTimeout(() => {
            button.innerText = "Terminé";
            button.classList.add("finishedButton");
            setTimeout(() => {
                button.innerText = "Envoyer ma demande";
                button.classList.add("initialButton");
                button.disabled = false;
            }, 2000);
        }, 2000);
    })
}

changeButton();