function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}


function generatePoem(event) {
    event.preventDefault();

    
let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "0cat4ed5a0453d5608fc6b4od86b35fc";
let context = "You are a poem expert and love to write short poems. Your mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions.";
let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiURL).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);



