import { createContext } from "react";
import { recipes } from "../data/recipes";

const RecipeContext = createContext(recipes[0]);
