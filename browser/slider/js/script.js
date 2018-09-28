const imgs = ["i/airmax-jump.png", "i/airmax-on-foot.png", "i/airmax-playground.png", "i/airmax-top-view.png", "i/airmax.png"];
const img = document.getElementById("slider");
img.src = imgs[0];
let i = 0;
function showImg() {
    i++;
    img.src = imgs[i];
    if (i == imgs.length - 1) {
        i = 0;
    }
}
setInterval(showImg, 5000);
