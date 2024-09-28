function displayResult(response, type) {
    const resultElement = document.querySelector("#result");
    new Typewriter(resultElement, {
        strings: response.data.answer,
        autoStart: true,
        delay: 50,
        cursor: "",
    });
    resultElement.classList.remove("hidden");
}

function generateContent(event) {
    event.preventDefault();

    const contentType = document.querySelector("#content-type").value;
    const instructionsInput = document.querySelector("#user-instructions").value;
    const apiKey = "0cat4ed5a0453d5608fc6b4od86b35fc";
    
    let context, prompt;

    if (contentType === "joke") {
        context = "You are a joke expert and love to create funny jokes. Your mission is to generate a short, humorous joke based on the user's instructions.";
        prompt = `User instructions: Generate a joke about ${instructionsInput}`;
    } else if (contentType === "poem") {
        context = "You are a poem expert and love to write short poems. Your mission is to generate a 4-line poem and separate each line with a <br />. Make sure to follow the user instructions.";
        prompt = `User instructions: Generate a poem about ${instructionsInput}`;
    }

    const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiURL).then(response => displayResult(response, contentType));
}

const generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateContent);
