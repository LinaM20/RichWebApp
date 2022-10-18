document.getElementById("search-button").addEventListener("click", function(){ 
    let username = document.getElementById("username-search");
    
    fetch(`https://api.github.com/users/${username.value}`)
    .then(function(res) {
        console.log(res);
        return res.json()})

        .then(function(data) { 

            document.querySelector("#image").src = data.avatar_url;
            document.querySelector("#username").innerText = data.login;
            document.querySelector("#fullname").innerText = data.name;
            document.querySelector("#location").innerText = data.location;
            document.querySelector("#email").innerText = data.emails;
            document.querySelector("#number-of-gists").innerText = data.public_gists;

            
            document.querySelector("#repo-name").innerHTML = data.repos; 
            console.log(data.repos);
            document.querySelector("#repo-description").innerHTML = data.repos.description;
            
            


        }) 
        .catch(function(error) { 
                document.querySelector("title").innerText=error;
        })
    });