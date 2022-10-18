import fetch from "node-fetch";

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => console.log(posts.filter(posts => titleCount(posts.title))))

console.log(posts.filter(posts => frequency(posts.body)))

function titleCount(title) {
  const posts = title.split(' ');

  console.log('RESULT:');
  return posts.filter(word => word !== '').length > 6;
}

function frequency(body) {
  
}