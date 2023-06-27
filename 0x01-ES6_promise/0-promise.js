// /* eslint-disable linebreak-style */
// /* eslint-disable import/no-extraneous-dependencies */
// const fetch = require('cross-fetch');

// export default function getResponseFromAPI(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       // eslint-disable-next-line consistent-return
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         reject(new Error(`${response.status}: ${response.statusText || 'Unknown error'}`));
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }
// // 0-promise.js
// function getResponseFromAPI() {
//   return new Promise((resolve, reject) => {
//     // Simulating an asynchronous API call
//     setTimeout(() => {
//       const success = true; // Simulating a successful API call
//       if (success) {
//         const mockResponse = { data: 'Mock response from API' };
//         resolve(mockResponse); // Resolving the Promise with the mock response
//       } else {
//         const error = new Error('API request failed');
//         reject(error); // Rejecting the Promise with the error
//       }
//     }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
//   });
// }

// export default getResponseFromAPI;

// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const success = false; // Simulating a failed API call
      if (success) {
        const error = new Error("API request failed");
        reject(error); // Rejecting the Promise with the error
      } else {
        const mockResponse = { data: "Mock response from API" };
        resolve(mockResponse); // Resolving the Promise with the mock response
      }
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
  });
}

export default getResponseFromAPI;
