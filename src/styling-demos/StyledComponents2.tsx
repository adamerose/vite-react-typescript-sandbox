// npm install styled-components

import { styled } from "styled-components";

function Article() {
  const StyledArticle = styled.div`
    padding: 10px;
    .title {
      font-weight: bold;
    }
    .content {
      font-style: italic;
    }
  `;

  return (
    <StyledArticle>
      <div className="title">Hello</div>
      <div className="content">World</div>
    </StyledArticle>
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
