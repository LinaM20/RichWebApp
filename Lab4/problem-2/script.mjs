fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
  console.log("Titles more than 6")
  let wordResult = posts.filter(posts => titleCount(posts.title))
  console.log(wordResult)

  console.log("Frequency Map")
  let frequencyCount = posts.map(posts => frequencyMap(posts.body))
  console.log(frequencyCount)

});

//Title count to show the titles that are more than 6
function titleCount(title) {
  const posts = title.split(' ');
  return posts.filter(word => word !== '').length > 6;
}

//Frequency map to show the frequency of words
function frequencyMap(body) {
  let results = {};
  let replaceWords = body.replaceAll('\n', ' ');
  let words = replaceWords.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    
    if(results[word] === undefined) {
      results[word] = 1;
    } else {
      results[word] += 1;
    }
  }

  return results;
}
