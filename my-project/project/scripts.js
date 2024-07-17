async function fetchRecipes() {
  try {
      const response = await fetch('http://localhost:3000/recipes');
      const recipes = await response.json();
      const recipeGrid = document.getElementById('recipeGrid');
      recipeGrid.innerHTML = ''; // Clear existing content

      recipes.forEach(recipe => {
          const recipeCard = document.createElement('div');
          recipeCard.className = 'recipe-card';
          recipeCard.innerHTML = `
              <img src="${recipe.image}" alt="${recipe.title}">
              <h3><a href="${recipe.link}" target="_blank">${recipe.title}</a></h3>
              <p>${recipe.description}</p>
          `;
          recipeGrid.appendChild(recipeCard);
      });
  } catch (error) {
      console.error('Error fetching recipes:', error);
  }
}

// Fetch recipes initially and set an interval to fetch them every 10 minutes
fetchRecipes();
setInterval(fetchRecipes, 10 * 60 * 1000); // 10 minutes in milliseconds
