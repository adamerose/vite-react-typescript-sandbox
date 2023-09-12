// utilities/customCss.js
import { css as emotionCss } from "@emotion/css";

export const withCustomCss = (Component) => {
  return (props) => {
    const style = css(Component.name);
    return <Component {...props} className={style} />;
  };
};

export const css = (name) => {
  const className = emotionCss`
    padding: 10px;
    .title {
      font-weight: bold;
    }
    .content {
      font-style: italic;
    }
  `;

  return `${name}_${className}`;
};
