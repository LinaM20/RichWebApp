fetch ('https://api.github.com/users')
.then(response => response.json())
.then(users => console.log (users));