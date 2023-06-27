// eslint-disable-next-line import/no-extraneous-dependencies
const fetch = require('cross-fetch');

export default function getResponseFromAPI(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`Request failed with status ${response.status}`);
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    }, 500);
  });
}
