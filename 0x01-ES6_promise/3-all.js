/* eslint-disable linebreak-style */
import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResponse, userResponse] = results;
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => {
      console.error('Signup system offline');
    });
}
