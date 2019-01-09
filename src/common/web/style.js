const baseSize = "8vh";
const sidePadding = "0.5rem;";

module.exports = `
  html {
    font-size: ${baseSize};
    font-family: helvetica, sans-serif;
    background-color: #f5f5f5;
    line-height: 1.5;
  }

  html, body {
    margin: 0;
    padding: 0;
    display: flex;
    flex: 1;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
  }

  .Main {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  .Text {
    padding: 1rem ${sidePadding};
    margin: 0;
    display: block;
  }

  .Footer {
    display: flex;
    background-color: #0d47a1;
  }

  .Location, .Date {
    display: flex;
    font-size: 0.5rem;
    color: white;
    padding: 0.5rem ${sidePadding};
    line-height: 1;
  }

  .Location {
    flex: 1;
  }
`;
