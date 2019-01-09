module.exports = function(style, script) {
  return `
    <html>
      <head>
        <meta 
          name='viewport' 
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' 
        />
        <style>${style || ""}</style>
        <script>${script || ""}</script>
      </head>
      <body>
        <main class="Main">
            <p onclick="window.onAction('onPressText')" class="Text"><%= text %></p>
        </main>
        <footer class="Footer">
          <span class="Location"><%= location %></span>
          <span class="Date"><%= dateString %></span>
        </footer>
      </body>
    </html>
  `;
};
