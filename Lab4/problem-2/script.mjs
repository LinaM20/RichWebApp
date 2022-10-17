import fetch from "node-fetch";

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   let arrayData = [];
//   arrayData.push(data);
//   console.log(arrayData);

//   let obj = arrayData.find(o => {
//     return o.title.length > 6;
//   });
//   console.log(obj);

// })

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => console.log(posts.filter(posts => titleCount(posts.title))))

function titleCount(title) {
  let posts = [];
  posts.push(title);
  console.log(posts);

  console.log('RESULT:');
  return posts.filter(title => title.length > 6);
}