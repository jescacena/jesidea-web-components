const header = require('./header.11ty.cjs');
const footer = require('./footer.11ty.cjs');
const nav = require('./nav.11ty.cjs');
const relative = require('./relative-path.cjs');

module.exports = function(data) {
  const {title, page, content} = data;
  return `
<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="${relative(page.url, '/docs.css')}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Roboto+Mono">
    <link href="${relative(page.url, '/prism-okaidia.css')}" rel="stylesheet" />
    <script type="module" src="${relative(page.url, '/jesidea-wc.bundled.js')}"></script>
  </head>
  <body>
    ${header()}
    <div id="main-wrapper">
      <main>
      <br>
      <center><a href="${relative(page.url, '/api/')}">API reference</a></center>
      <ul>
        <li><a href="${relative(page.url, '/my-element/')}">my-element</a></li>
        <li><a href="${relative(page.url, '/jwc-user-profile/')}">jwc-user-profile</a></li>
      </ul>
      </main>
    </div>
    ${footer()}
  </body>
</html>`;
};
