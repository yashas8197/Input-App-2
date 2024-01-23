const favBookTextarea = document.getElementById("favBookTextarea")
const displayFavBookButton = document.getElementById("displayFavBookButton")
const displayFavBookResult = document.getElementById("displayFavBookResult")

displayFavBookButton.addEventListener("click", function() {
  const favBook = favBookTextarea.value
  displayFavBookResult.textContent = `Your favorite books: ${favBook}`
})

const recipeTextarea = document.getElementById("recipeTextarea")
const displayRecipeButton = document.getElementById("displayRecipeButton")
const displayRecipeResult = document.getElementById("displayRecipeResult")

displayRecipeButton.addEventListener("click", function() {
  const recipe = recipeTextarea.value
  const recipeArr = recipe.split("\n\n")
  displayRecipeResult.innerHTML = `<strong>Ingredients: </strong>
    <p>${recipeArr[0]}</p>
    <strong>Instruction: </strong>
    <p>${recipeArr[1]}</p>

    `
})

const personalBioTextarea = document.getElementById("personalBioTextarea")
const displayPersonalBioButton = document.getElementById("displayPersonalBioButton")
const displayPersonalBioResult = document.getElementById("displayPersonalBioResult")

displayPersonalBioButton.addEventListener("click", function() {
  const bio = personalBioTextarea.value
  displayPersonalBioResult.textContent = `Your Personal Bio: ${bio}`
})

const goalsTextarea = document.getElementById("goalsTextarea")
const displayGoalsButton = document.getElementById("displayGoalsButton")
const displayGoalsResult = document.getElementById("displayGoalsResult")

displayGoalsButton.addEventListener("click", function() {
  const goals = goalsTextarea.value
  displayGoalsResult.textContent = `Your list of goals: ${goals} `
})

const stroyTextarea = document.getElementById("stroyTextarea")
const displayStoryButton = document.getElementById("displayStoryButton")
const displayStoryResult = document.getElementById("displayStoryResult")

displayStoryButton.addEventListener("click", function() {
  const story = stroyTextarea.value
  displayStoryResult.textContent = `Your short story or anecdote: ${story} `
})