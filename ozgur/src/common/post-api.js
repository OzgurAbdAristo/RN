import React from 'react';
let email = '';

const post_api = () => {
  return fetch('http://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: 'morpheus', job: 'leader'}),
  })
    .then(response => response.json())
    .then(responseJson => {
      // email = responseJson.data[0].email;
      return responseJson.data[0].email;
    })
    .catch(error => {
      console.error(error);
    });
  // return email;
};

const test = tt => `Hello ${tt}`;

export default {post_api, test};
