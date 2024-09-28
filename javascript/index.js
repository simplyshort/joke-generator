function displayJoke(response) {
    new Typewriter("#joke", {
        strings: response.data.answer,
        autoStart: true,
        delay: 50,
        cursor: "",
    });
}

function generateJoke(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "0cat4ed5a0453d5608fc6b4od86b35fc";
    let context = "You are a joke expert and love to create funny jokes. Your mission is to generate a short, humorous joke based on the user's instructions.";
    let prompt = `User instructions: Generate a joke about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let jokeElement = document.querySelector("#joke");
    jokeElement.classList.remove("hidden");

    axios.get(apiURL).then(displayJoke);
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);
