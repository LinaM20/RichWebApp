document.getElementById("search-button").addEventListener("click", function(){ 
    let username = document.getElementById("username-search");
    
    fetch(`https://api.github.com/users/${username.value}`)
    .then(function(res) {
        console.log(res);
        return res.json()})

        .then(function(data) { 
            console.log(data)
            document.querySelector("#image").src = data.avatar_url;
            document.querySelector("#username").innerText = data.login;
            document.querySelector("#fullname").innerText = data.name;
            document.querySelector("#location").innerText = data.location;
            document.querySelector("#email").innerText = data.email;
            document.querySelector("#number-of-gists").innerText = data.public_gists;

            document.querySelector("#repo-name").innerHTML = data.repos_url; 
            document.querySelector("#repo-description").innerHTML = data.repos.description;
      
        }) 
        .catch(function(error) { 
                document.querySelector("title").innerText = error;
        })

        fetch(`https://api.github.com/users/${username.value}/repos`)
        .then(function(res) {
        return res.json()})
        .then(function(data){
            console.log(data);
            
            let html = "";

            for (var i = 0; i < data.length; i++) {
                html += `
                        <div id="user-repos">
                            <div id="repo-name">${data[i].name}</div>
                            <div id="repo-description">${data[i].description}</div>
                        </div>`
        
                         
            }

            

            let repoDiv = document.querySelector("#user-repos-container"); 
            repoDiv.innerHTML = html;
           
        })
    });
    