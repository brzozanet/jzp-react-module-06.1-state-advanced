import { Article } from "../Article/Article";
import css from "./Cookbook.module.css";

export function Cookbook({ heading }) {
  return (
    <main className={css.main}>
      <h1>{heading}</h1>
      <Article />
    </main>
  );
}
