import fetch from "node-fetch";

fetch('https://jsonplaceholder.typicode.com/posts/')
.then((response) => {
  return response.json();
})
.then((data) => {
  let arrayData = [];
  arrayData.push(data);
  console.log(arrayData);

  let obj = arrayData.find(o => o.title.length > 6);
  console.log(obj);

})