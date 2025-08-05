const findIdeaButton = document.querySelector("button");
const randomIdea = document.querySelector("p");

function recupererIdee() {
    fetch('https://www.boredapi.com/api/activity')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.activity)
        })
        .catch((error) => {
            console.log("Erreur :", error);
        });
}

findIdeaButton.addEventListener("click", () => {
    const activity = recupererIdee();
    randomIdea.textContent = activity;
})

// async function recupererIdee() {
//         try {
//             const response = await fetch('https://www.boredapi.com/api/activity');
//             const data = await response.json();
//             document.getElementById("idee").textContent = data.activity;
//         } catch (error) {
//             console.log("Erreur :", error);
//         }
//     }

// recupererIdee();


