module.exports = () => `
  document.addEventListener('DOMContentLoaded', function() {
    function postMessage(type, payload) {
      const message = JSON.stringify({
        type: type,
        payload: payload
      });

      if (document.hasOwnProperty('postMessage')) {
        document.postMessage(message, '*');
      } else if (window.hasOwnProperty('postMessage')) {
        window.postMessage(message, '*');
      } else {
        throw new Error('Could not find postMessage');
      }
    }

    window.onAction = postMessage;
  });
`;
