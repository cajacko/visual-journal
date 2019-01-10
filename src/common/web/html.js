module.exports = function(style, script, { text, location, dateString }) {
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
      <body scroll="no">
        <main class="Main" onclick="window.onAction('onPressText')" >
            <p class="Text">${text}</p>
        </main>
        <footer class="Footer">
          <span class="Location" onclick="window.onAction('onPressLocation')" >${location}</span>
          <span class="Date" onclick="window.onAction('onPressDate')" >${dateString}</span>
        </footer>
      </body>
    </html>
  `;
};
