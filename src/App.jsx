import { useState } from "react";
import css from "./App.module.css";
import { recipes } from "./data/recipes";
import { List } from "./components/List/List";
import { Cookbook } from "./components/Cookbook/Cookbook";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(1);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  return (
    <div className={css.container}>
      <List
        recipes={recipes}
        onSelectRecipe={(id) => setSelectedRecipeId(id)}
      />
      <Cookbook />
    </div>
  );
}

export default App;
