const btn = document.getElementById("btn");
const output = document.getElementById("output");

function getPost() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      output.innerHTML = "";
      data.forEach((post) => {
        output.innerHTML += `
          <div class='post'>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
      });
    })
    .catch((error) => {
      console.error("Error : ", error);
    });
}

async function fetchPost() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    //console.log(data);

    output.innerHTML = "";
    data.forEach((post) => {
      output.innerHTML += `
        <div class='post'>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error : ", error);
  }
}

btn.addEventListener("click", fetchPost);
