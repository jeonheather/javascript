function over2(obj) {
    obj.src="./images/펭수06.jpg";
}
function out2(obj) {
    obj.src="./images/펭수05.jpg";
}

var img4 = document.getElementById("img4");
img4.addEventListener("mouseover", over3);

img4.addEventListener("mouseout", out3);

function over3() {
    img4.src = "./images/펭수06.jpg"
}

function out3() {
    img4.src = "./images/펭수05.jpg"
}
