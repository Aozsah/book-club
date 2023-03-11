function convertBase64ToURL(base64String) {
    const mimeType = base64String.match(/^data:(.*);base64,/)[1];
    return `data:${mimeType};base64,${base64String}`;
  }
  
  module.exports = { convertBase64ToURL };
  