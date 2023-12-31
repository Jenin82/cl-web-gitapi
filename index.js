let repos = document.getElementById("repos");
let img=document.getElementById("img")
let input = document.getElementById("textbox")
let bio=document.getElementById("bio")
let followers = document.getElementById("followers")
let username="Jenin82"

function fetchdata(event){
  event.preventDefault()
username=input.value || "Jenin82"
repos.innerHTML=""
fetch(`https://api.github.com/users/${username}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById("name").innerText = data.name;
    img.src = data.avatar_url;
    followers.innerText=data.followers
    bio.innerText=data.bio;
  });


fetch(`https://api.github.com/users/${username}/repos`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((repo) => {
      const repoCard = document.createElement("div");
      repoCard.classList.add("repo");
      repoCard.innerHTML = `
                    <h2>${repo.name}</h2>
                    
                    <p>${repo.description}</p>
                    <div class="star-fork-container">
                    <h3 ><i class="fa-regular fa-star"></i> ${repo.stargazers_count} </h3>
                    <h3><i class="fa-solid fa-code-fork"></i> ${repo.forks_count}</h3>
                </div>
                <a href="https://github.com/${username}/${repo.name}">View on Github</a>
                </div>`;
                
            repos.appendChild(repoCard);
    });
  });
}
