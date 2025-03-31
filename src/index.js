function displayRecipe(response){
    new Typewriter("#recipe",{
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor:"",
    });
}
function generateRecipe(event){
    event.preventDefault();

let instructionsInput = document.querySelector("#search-input");
let apiKey = "8f0ab40o57b12e2t3b934b3b4137cfbc";
let context = `please write the recipe with ingredients and cooking steps`;
let prompt = `User intructions: Generate full recipe ${instructionsInput.value}`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement = document.querySelector("#recipe");
recipeElement.innerHTML = `<div class="generating">⏳ Recipe loading ${instructionsInput.value}</div>`;
axios.get(apiURL).then(displayRecipe);
}

let recipeElement = document.querySelector("#search-form");
recipeElement.addEventListener("submit", generateRecipe);