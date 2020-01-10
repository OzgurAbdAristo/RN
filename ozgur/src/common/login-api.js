const loginApi = (email, password) => {
  return fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email: email, password: password}),
  })
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
};
export default {loginApi};
