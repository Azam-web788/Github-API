const input= document.querySelector("#input")
const div = document.querySelector(".container")
const submit= document.querySelector("#submit")

function btn() {
    fetch(`https://api.github.com/users/${input.value}`)
    .then((res)=>{
        if(!res.ok){
            throw new Error('User not found') 
            // console.log('reggg')
        }
        return res.json()
    }).then((data)=>{
        div.innerHTML=`<div class="contain">
            <img src="${data.avatar_url}" alt="" class="image">
            <h1>Name: ${data.name}</h1>
            <h2>Company: ${data.company}</h2>
            <h2>Bio: ${data.bio}</h2>
            <h1>Location: ${data.location}</h1>
            <h3>id: ${data.id}</h3>
            <h3>TotalFollowers: ${data.followers}</h3>
            <h3>TotalRepositories: ${data.public_repos}</h3>            
        </div>`
    }).catch(()=>{
        div.innerHTML=`<h1>404 Account not found</h1>`
    })
    input.value = ""
}
submit.value= ""    
