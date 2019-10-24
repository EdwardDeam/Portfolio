// Parallax Scroll for Keyart
(() => {
  window.addEventListener("scroll", function(e) {
    let scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const layers = document.querySelectorAll(".keyart_layer");
    layers.forEach(layer => {
      let dataSpeed = layer.dataset.speed;
      let offsetY = -(scrollTop * dataSpeed);
      let translate = "translate3d(0, " + offsetY + "px, 0)";
      layer.style.transform = translate;
    });
  });
})();
// onClick events for skills
const title = document.querySelector(".about-heading");
const text = document.querySelector(".about-text");
const lorem =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque illum esse eveniet distinctio facere. Eligendi illum incidunt, sapiente tempora deleniti ducimus aliquam maxime animi exercitationem laudantium. Accusamus temporibus laboriosam reprehenderit culpa quam minus provident eligendi, sint sunt totam quibusdam fuga dignissimos, iste suscipit. Omnis rerum dolores magni ab quisquam quod eos. Iure unde, tempore velit aut beatae ipsa ipsum sapiente quia magni deserunt, recusandae debitis quo reiciendis accusantium, quam eaque. Suscipit soluta odit velit id eos iusto illum error. Dolorem.";
function displayBio() {
  title.innerText = "ABOUT ME";
  text.innerText = lorem;
}
function displayCSharp() {
  title.innerText = "C#";
  text.innerText = lorem;
}
function displayNode() {
  title.innerText = "NODE JS";
  text.innerText = lorem;
}
function displayReact() {
  title.innerText = "REACT JS";
  text.innerText = lorem;
}
function displayIllustrator() {
  title.innerText = "ILLUSTRATOR";
  text.innerText = lorem;
}
function displayPhotoshop() {
  title.innerText = "PHOTOSHOP";
  text.innerText = lorem;
}
function displayGit() {
  title.innerText = "GIT / GITHUB";
  text.innerText = lorem;
}
function displayMongo() {
  title.innerText = "MONGO DB";
  text.innerText = lorem;
}
function displayJS() {
  title.innerText = "JAVASCRIPT";
  text.innerText = lorem;
}
