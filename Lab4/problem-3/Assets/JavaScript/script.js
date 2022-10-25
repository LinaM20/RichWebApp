document.getElementById("search-button").addEventListener("click", function(){ 
    let username = document.getElementById("username-search");
    
    fetch(`https://api.github.com/users/${username.value}`)
    .then(function(res) {
        console.log(res);
        return res.json()})

        .then(function(data) { 
            console.log(data)
            document.getElementById("image").src = data.avatar_url;
            document.getElementById("username").innerText = data.login;
            document.getElementById("fullname").innerText = data.name;
            document.getElementById("location").innerText = data.location;
            
            if (data.email == null) {
                document.getElementById("email").innerText = "N/A";
            }
            else {
                document.getElementById("email").innerText = data.email;
            }
            
            document.getElementById("number-of-gists").innerText = data.public_gists;

        }) 
        .catch(function(error) { 
                document.getElementById("title").innerText = error;
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

            let repoDiv = document.getElementById("user-repos-container"); 
            repoDiv.innerHTML = html;
           
        })
    });
    