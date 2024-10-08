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

  const promotedRecipe = recipes.find((recipe) => recipe.id === 4);

  return (
    <>
      <div className={css.container}>
        <RecipeContext.Provider value={selectedRecipe}>
          <List
            recipes={recipes}
            onSelectRecipe={(id) => setSelectedRecipeId(id)}
          />
          <Cookbook heading={"Książka kucharska"} />
        </RecipeContext.Provider>
      </div>
      <div className={css.promoted}>
        <RecipeContext.Provider value={promotedRecipe}>
          <p>Przepis tygodnia</p>
          <Recipe />
        </RecipeContext.Provider>
      </div>
    </>
  );
}

export default App;
