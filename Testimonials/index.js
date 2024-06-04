let progress = 0;
let clients_say = [
  "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies.",
  "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. Thanks again!"
];

let client_names = ["June Cha", "Iida Niskanen", "Jonathan Nunfiez"];

let client_passion = ["Software Engineer", "Data Entry", "Graphic Designer"];

let client_img = [
  "https://images.pexels.com/photos/20410359/pexels-photo-20410359/free-photo-of-girl-in-a-bamboo-forest.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3769109/pexels-photo-3769109.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800"
];

let client = 0;

function startProgress() {
  let loader = document.getElementById("loader");
  let says = document.getElementById("says");
  let name = document.getElementById("name");
  let passion = document.getElementById("passion");
  let imgClient = document.getElementById("imgClient");

  setInterval(() => {
    if (progress >= 100) {
      progress = 0;
      client++;
      if (client >= clients_say.length) {
        client = 0;
      }
      says.innerHTML = clients_say[client];
      name.innerHTML = client_names[client];
      passion.innerHTML = client_passion[client];
      imgClient.src = client_img[client];
    }
    loader.style.width = progress + "%";
    progress++;
  }, 100);
}

startProgress();
