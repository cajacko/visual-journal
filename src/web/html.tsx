export default (style, script) => `
  <html>
    <head>
      <meta 
        name='viewport' 
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' 
      />
      <style>${style}</style>
      <script>${script}</script>
    </head>
    <body>
      <p onclick="window.onAction('onPressText')" class="Text"><%= text %></p>
    </body>
  </html>
`;
