// Fonction getPosts qui
  // 1. recupere le premier utilisateur depuis https://jsonplaceholder.typicode.com/users
  // 2. recupere  les taches a faires du premier utilisateur depuis https://jsonplaceholder.typicode.com/todos?userId=[ID]
  // 3. renvois les taches au format JSON

const get =  (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new window.XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200)
          resolve(xhr.responseText);
        else
          reject(xhr);
      }
    }
    xhr.open('GET', url);
    xhr.send();
  });
}
//Async/Await
const getPosts = async () => {
  try {
    const response = await get('https://jsonplaceholder.typicode.com/users');

    const users = JSON.parse(response);
    const user = users[0];
    const id = user.id;

    const responseTasks = await get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
    const tasks = JSON.parse(responseTasks);
    console.log(tasks);
  } catch (e) {
    console.error(e);
  }
};

//Promesses
// const getPosts = () => {
//   get('https://jsonplaceholder.typicode.com/users').then((response) => {
//     const users = JSON.parse(response);
//     const user = users[0];
//     const id = user.id;
//     get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`).then((response) => {
//       const tasks = JSON.parse(response);
//       console.log(tasks);
//     });
//   }).catch((error) => {
//     console.error(error);
//   })
// };

// Callbacks
// const getPosts = () => {
//     get('https://jsonplaceholder.typicode.com/users', (response) => {
//     const users = JSON.parse(response);
//     const user = users[0];
//     const id = user.id;
//     get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`, (response) => {
//       const tasks = JSON.parse(response);
//       console.log(tasks);
//     }, (error) => {
//       console.error(error);
//     })
//   }, (error) => {
//     console.error(error);
//   });
// };

getPosts();
