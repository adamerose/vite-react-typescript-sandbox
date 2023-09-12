// npm install @emotion/css

// import { css } from "@emotion/css";
import { css } from "./utilities/cssWithName";

function Article() {
  const style = css`
    padding: 10px;
    .title {
      font-weight: bold;
    }
    .content {
      font-style: italic;
    }
  `;

  return (
    <div className={style}>
      <div className="title">Hello</div>
      <div className="content">World</div>
    </div>
  );
}

export default Article;

/* 

DOM output:

<div class="css-lcch6k">
  <div class="title">Hello</div>
  <div class="content">World</div>
</div>;

*/
