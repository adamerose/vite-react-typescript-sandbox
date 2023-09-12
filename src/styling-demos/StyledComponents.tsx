/* 
npm install styled-components
npm i babel-plugin-styled-components

Add this to vite.config.js
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
    })
  ]
})
*/

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
