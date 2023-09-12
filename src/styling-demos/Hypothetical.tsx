import styled from "./utilities/styledWithName";

function Article() {
  styled`
    padding: 10px;
    .title {
      font-weight: bold;
    }
    .content {
      font-style: italic;
    }
  `;

  return (
    <div>
      <div className="title">Hello</div>
      <div className="content">World</div>
    </div>
  );
}

export default Article;

/*

DOM output:

<div class="sc-hBpgZr jUinNn">
  <div class="title">Hello</div>
  <div class="content">World</div>
</div>

*/
