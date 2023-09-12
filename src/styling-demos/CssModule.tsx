/*

*/
import classes from "./CssModule.module.css";

function Article() {
  return (
    <div className={classes.article}>
      <div className={classes.title}>Hello</div>
      <div className={classes.content}>World</div>
    </div>
  );
}

export default Article;

/* 

DOM output:

<div class="_article_18sr0_1">
  <div class="_title_18sr0_11">Hello</div>
  <div>World</div>
</div>

*/
