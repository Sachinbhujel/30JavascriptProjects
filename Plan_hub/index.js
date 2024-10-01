let postsArray = [];

function loadPostsFromLocalStorage() {
  const storedPosts = localStorage.getItem("posts");
  if (storedPosts) {
    postsArray = JSON.parse(storedPosts);
  }
}

function savePostsToLocalStorage() {
  localStorage.setItem("posts", JSON.stringify(postsArray));
}

const homeBtn = document.getElementById("homeBtn");
const allPostBtn = document.getElementById("allPostBtn");

function setActive(button) {
  homeBtn.classList.remove("active");
  allPostBtn.classList.remove("active");
  button.classList.add("active");
}

homeBtn.addEventListener("click", () => setActive(homeBtn));
allPostBtn.addEventListener("click", () => setActive(allPostBtn));

async function createPost() {
  const plan1 = document.getElementById("plan_1").value.trim();
  const plan2 = document.getElementById("plan_2").value.trim();
  const plan3 = document.getElementById("plan_3").value.trim();
  const plan4 = document.getElementById("plan_4").value.trim();
  const name = document.getElementById("name").value.trim();

  if (!plan1 || !plan2 || !name) {
    alert(
      "Please fill in at least Plan 1, Plan 2, and your Name before submitting."
    );
  } else {
    let newPost = {
      plan1,
      plan2,
      plan3,
      plan4,
      name
    };

    alert("Post created successfully!");

    postsArray.push(newPost);
    savePostsToLocalStorage();

    document.getElementById("plan_1").value = "";
    document.getElementById("plan_2").value = "";
    document.getElementById("plan_3").value = "";
    document.getElementById("plan_4").value = "";
    document.getElementById("name").value = "";
  }
}

async function allPost() {
  document.getElementById("plan_div").style.display = "none";
  document.getElementById("post_div").style.display = "flex";

  try {
    let postDiv = document.getElementById("post_div");
    postDiv.innerHTML = "";

    loadPostsFromLocalStorage();
    if (postsArray.length === 0) {
      postDiv.innerHTML = `<h1>Can't Find A Post</h1>`;
    } else {
      let postsAll = postsArray
        .map(
          (post) => `
      <div class="all_posts_div">
      <div class="post_div">
        <h2 class="post">1. ${post.plan1}</h2>
        <h2 class="post">2. ${post.plan2}</h2>
        <h2 class="post">3. ${post.plan3}</h2>
        <h2 class="post">4. ${post.plan4}</h2>
      <div class="user_info">
        <h3><span>Created by -</span> ${post.name}</h3>
      </div>
      </div> 
    </div>
    `
        )
        .join("");

      postDiv.innerHTML = postsAll;
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function home() {
  document.getElementById("plan_div").style.display = "block";
  document.getElementById("post_div").style.display = "none";
}

window.onload = loadPostsFromLocalStorage;
