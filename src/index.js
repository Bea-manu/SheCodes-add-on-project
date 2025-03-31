function generateRecipe(event){
    event.preventDefault();


let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
let apiKey = "8f0ab40o57b12e2t3b934b3b4137cfbc";
let context = ""
let prompt = `User intructions: Generate full recipe ${instructionsInput.value}`;
}