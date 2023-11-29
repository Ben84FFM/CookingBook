const recipeList = document.querySelector('#recipe-list');
const recipeIframe = document.querySelector('#recipe-iframe');

recipeList.addEventListener('change', function () {
  const selectedRecipe = recipeList.value;
  recipeIframe.src = selectedRecipe;
});

function mouseOver() {
  const res = document.querySelector('.title').innerText;
  const img= document.getElementById("tip");
  img.title=res;
  img.style="cursor: pointer; border-radius: 20px;";
}
