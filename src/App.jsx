import { useState } from "react";
import css from "./App.module.css";
import { recipes } from "./data/recipes";
import { List } from "./components/List/List";
import { Cookbook } from "./components/Cookbook/Cookbook";
import { RecipeContext } from "./context/RecipeContext";
import { Recipe } from "./components/Recipe/Recipe";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(1);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );
  console.log(selectedRecipe.id);

  // const { name, ingredients, description, img } = selectedRecipe;

  return (
    <>
      <div className={css.container}>
        <RecipeContext.Provider value={selectedRecipe}>
          <List
            recipes={recipes}
            onSelectRecipe={(id) => setSelectedRecipeId(id)}
          />
          <Cookbook title={"Książka kucharska"} />
        </RecipeContext.Provider>
      </div>
      <div className={css.promoted}>
        <RecipeContext.Provider value={recipes[3]}>
          <h2>Przepis tygodnia:</h2>
          <Recipe />
        </RecipeContext.Provider>
      </div>
    </>
  );
}

export default App;
