import * as React from "react";
import * as ReactDOMServer from "react-dom/server";

export function Document(props) {
  // eslint-disable-next-line no-eval
  const assets = eval("require")(process.env.RAZZLE_ASSETS_MANIFEST);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <title>Stopwatch Assignment</title>
        <script src={assets.client.js} defer />
      </head>
      <body>
        <div
          dangerouslySetInnerHTML={{
            __html: ReactDOMServer.renderToString(props.children)
          }}
          data-app-root
        />
      </body>
    </html>
  );
}
