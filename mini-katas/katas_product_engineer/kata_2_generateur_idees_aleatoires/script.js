// lancer le serveur python: python3 -m http.server 8000
const findIdeaButton = document.querySelector("button");
const randomIdea = document.querySelector("p");
const corsProxy = "https://corsproxy.io/?";
const apiURL = "https://bored-api.appbrewery.com";
let dataActivity = "";



// function recupererIdee() {
//     fetch(`${corsProxy}${apiURL}/random`) 
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data.activity)
//             randomIdea.textContent = data.activity;
//         })
//         .catch((error) => {
//             console.log("Erreur :", error);
//         });
// }

// console.log(dataActivity)

async function recupererIdee() {
    try {
        const response = await fetch(`${corsProxy}${apiURL}/random`);
        const data = await response.json();
        return data.activity;
    } catch (error) {
        console.log("Erreur :", error);
    }
}

findIdeaButton.addEventListener("click", async() => {
    const activity = await recupererIdee();
    randomIdea.textContent = activity;
})



