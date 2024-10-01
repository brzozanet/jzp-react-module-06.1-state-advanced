import css from "./List.module.css";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";

export function List({ recipes, onSelectRecipe }) {
  const recipe = useContext(RecipeContext);
  console.log(recipe.id);

  return (
    <nav className={css.nav}>
      <span className={css.title}>Lista przepisów:</span>
      <ul className={css.list}>
        {recipes.map(({ id, name }) => (
          <li key={id} className={css.item}>
            <Button
              onClick={() => onSelectRecipe(id)}
              active={recipe.id === id && true}
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
