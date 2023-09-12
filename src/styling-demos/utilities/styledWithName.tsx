// utilities/styledWithName.js
import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";

export default function styled(styles) {
  const [ComponentName] = useState(getDisplayName(useContextFunction()));

  const GlobalStyle = createGlobalStyle`
    .${ComponentName} {
      ${styles}
    }
  `;

  useEffect(() => {
    return () => GlobalStyle;
  }, []);

  return ComponentName;
}

function useContextFunction() {
  // This is a hacky way to get the name of the calling function (component)
  try {
    throw new Error();
  } catch (err) {
    const stackTrace = err.stack.split("\n")[3];
    const functionName = stackTrace.match(/[^\s]+\s/)[0].replace(/\s+/g, "");
    return functionName;
  }
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
