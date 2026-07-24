// "use strict"

// let addBtn = document.getElementById("adduser")
// let loginBtn = document.getElementById("login")
// let removeBtn = document.getElementById("remove")
// let clearBtn = document.getElementById("clear")
// let inputUser = document.getElementById("inputuser")

// let header= document.getElementById("header")

// let userName = localStorage.getItem(`userName`)

// addBtn.addEventListener("click", ()=>{
//   localStorage.setItem(`userName`,inputUser.value)
//   location.reload
// })
// loginBtn.addEventListener("click", ()=>{
//   header.innerHTML = `Hello ${userName}`
// })
// removeBtn.addEventListener("click", ()=>{
//   localStorage.removeItemItem(`userName`)
//   location.reload
// })
// clearBtn.addEventListener("click", ()=>{
//   localStorage.clear()
//   location.reload
// })
let postsDiv = document.querySelector(".container")

async function getposts() {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts`,
    );
    if (response.ok) {
      let resData = await response.json();
      displayContent(resData);
      // for (const post of resData) {
      //   for (const item in post) {
      //     console.log(post[item]);
      //   }
      // }
    } else {
      console.log(`no data found`);
    }
  } catch (error) {
    console.log(error);
  }
}
getposts();

function displayContent(dataArray) {
  let content = ``;
  for (const post of dataArray) {
    content += `
    <div class="post">
            <h1 class="text-center">${post.id}</h1>
            <p>${post.title}</p>
            <p>${post.body}</p>
        </div>
    `;
  }
  postsDiv.innerHTML= content
}
