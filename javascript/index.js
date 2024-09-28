function showAnswer(response) {
    alert(response.data.answer);
}

let apiKey = "0cat4ed5a0453d5608fc6b4od86b35fc"; 
let context = "be polite and provide a very short answer";
let prompt = "can you tell me a joke?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl)
    .then(showAnswer)

