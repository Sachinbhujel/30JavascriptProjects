document.querySelectorAll(".links").forEach(function (links) {
  links.addEventListener("click", function () {
    document.querySelectorAll(".links").forEach(function (links) {
      links.classList.remove("active");
    });
    this.classList.add("active");
  });
});

document.querySelectorAll(".links2").forEach(function (links2) {
  links2.addEventListener("click", function () {
    document.querySelectorAll(".links2").forEach(function (links2) {
      links2.classList.remove("active2");
    });
    this.classList.add("active2");
  });
});

var typeName = prompt("Enter Your First Name?");
if (typeName === "") {
  alert("Type your name first!");
  var typeName = prompt("Your First Name?");
  typeName = "unknown";
}

function tweetBtn() {
  let hastag = [
    "#100daysofcode",
    "#shameless",
    "#trending",
    "#sukuna",
    "#IndianRailways",
    "#naruto",
    "#happybirthday",
    "#tatabirla",
    "elonmusk",
    "#coding",
    "#loveCoding"
  ];
  let randomHastag = Math.floor(Math.random() * hastag.length);

  let userName = [
    "@sathi_timro",
    "@khoya_dil",
    "@hum_mile",
    "@you_are",
    "@we_together",
    "@timi_xau",
    "@kina_ho"
  ];
  let randomUserName = Math.floor(Math.random() * userName.length);

  let textarea = document.getElementById("textarea");
  let allTweets = document.getElementById("all_tweets");
  let randomComment = Math.floor(Math.random() * 10);
  let randomRetweet = Math.floor(Math.random() * 6);
  let randomLike = Math.floor(Math.random() * 12);
  let randomShare = Math.floor(Math.random() * 8);
  let randomMinutes = Math.floor(Math.random() * 50);
  if (textarea.value == "") {
    alert("Type Something....");
  } else {
    allTweets.innerHTML += `<div class="show_tweet">
        <div class="tweets_left">
        <img src="${"https://images.pexels.com/photos/6898857/pexels-photo-6898857.jpeg?auto=compress&cs=tinysrgb&w=800"}">
      </div>
        <div class="tweets_right">
          <div class="tweets_right_top">
          <div class="tweets_right_top_left">
            <h4>${typeName}</h4>
            <p>${userName[randomUserName]}</p>
            <p>&#x2022; ${randomMinutes}m</p>
          </div>
          <div class="tweets_right_top_left_right">
            <span class="material-symbols-outlined arrow">
              keyboard_arrow_down
            </span>
          </div>
        </div>
          <div class="tweets_right_middle">
          <p>${textarea.value} <span class="hastags">${
      hastag[randomHastag]
    }</span></p>
        </div>
          <div class="tweets_right_bottom">
          <div class="tweets_right_bottom_icons">
            <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/bubble-128.png">
            <p>${randomComment}</p>
          </div>
          <div class="tweets_right_bottom_icons">
            <img src="https://cdn0.iconfinder.com/data/icons/social-productivity-line-art-7/128/retweet-128.png" class="retweet">
            <p>${randomRetweet}</p>
          </div>
          <div class="tweets_right_bottom_icons">
            <i class="fas fa-heart heart" id="heart"></i>
            <p>${randomLike}</p>
          </div>
          <div class="tweets_right_bottom_icons">
            <img src="https://cdn1.iconfinder.com/data/icons/ionicons-outline-vol-2/512/share-outline-128.png">
          </div>
        </div>
        </div>
      </div>
      <div class="tweet_end_hr"></div>`;
    textarea.value = "";
  }
}

document
  .getElementById("all_tweets")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("heart")) {
      event.target.classList.toggle("red");

      let likeCountElement = event.target.nextElementSibling;
      if (event.target.classList.contains("red")) {
        likeCountElement.textContent++;
      } else {
        likeCountElement.textContent--;
      }
    }
  });

function sideNavBar() {
  document.getElementById("left2").style.display = "block";
  document.getElementById("mySidenav").style.width = "80%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function hastagShowBtn() {
  document.getElementById("right").style.display = "flex";
  document.getElementById("middle").style.display = "none";
}

function closeBtn() {
  document.getElementById("right").style.display = "none";
  document.getElementById("middle").style.display = "block";
}

function searchBtn() {
  alert("Search btn is not working!!");
}

function followBtn(e) {
  if (e.textContent === "following") {
    e.textContent = "follow";
  } else {
    e.textContent = "following";
  }
}
