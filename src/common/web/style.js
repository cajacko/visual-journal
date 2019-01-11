const baseSize = "8vh";
const sidePadding = "0.5rem;";
const iconOffset = "1rem;";

module.exports = ({ themeProps: { color } }) => `
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
    overflow: hidden;
  }

  .Main {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .TextArea {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .Text {
    padding: 1rem ${sidePadding};
    margin: 0;
    display: block;
    position: relative;
    z-index: 2;
  }

  .Icons {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .Icon {
    position: absolute;
    height: 2rem;
    width: 2rem;
    opacity: 0.1;
  }

  .Icon:nth-child(1) {
    transform: rotate(-5deg);
    top: ${iconOffset}
    left: ${iconOffset}
  }

  .Icon:nth-child(2) {
    transform: rotate(5deg);
    bottom: ${iconOffset}
    right: ${iconOffset}
  }

  .Icon:nth-child(3) {
    transform: rotate(5deg);
    top: ${iconOffset}
    right: ${iconOffset}
  }

  .Icon:nth-child(4) {
    transform: rotate(-5deg);
    bottom: ${iconOffset}
    left: ${iconOffset}
  }

  .Footer {
    display: flex;
    background-color: ${color};
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
