function displayRecipe(response){
    new Typewriter("#recipe"{
        strings: true,
        delay: 1,
        cursor:"",
    });
}
function generateRecipe(event){
    event.preventDefault();

let instructionsInput = document.querySelector("#search-input");
let apiKey = "8f0ab40o57b12e2t3b934b3b4137cfbc";
let context = "please write the recipe with ingredients and cooking steps";
let prompt = `User intructions: Generate full recipe ${instructionsInput.value}`;
let apiUrl = `https://api.shecodes.io/recipes/search?query=${instructionsInput.value}&key=${apiKey}`;

axios.get(apiUrl).then(displayRecipe);
}