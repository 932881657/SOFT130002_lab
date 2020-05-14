const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["pic/human1.jpg","pic/human2.jpg","pic/human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["pic/classical1.jpg","pic/classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["pic/abstract1.jpg","pic/abstract2.jpg","pic/abstract3.jpg","pic/abstract4.jpg","pic/abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["pic/beauty1.jpg","pic/beauty2.jpg"] }
];
for(a = 0 ; a < 4 ; a++ ){
    var para = document.createElement("div");
    para.style.margin = "1em 0";
    para.style.padding = "5px";
    para.className = "item";

    var genre = document.createTextNode("Genre: " + works[a].tips);
    var para0 = document.createElement("h4");
    para0.appendChild(genre);
    para0.className = "item";

    var para1 = document.createElement("div");
    para1.style.padding = "10px";
    para1.style.margin = "15px";
    var para11 = document.createElement("h3");
    var author = document.createTextNode(works[a].author);
    para11.appendChild(author);
    para11.className = "item";
    para11.style.display = "inline";
    para11.className = "inner-box";
    var para12 = document.createElement("h5");
    var lifetime = document.createTextNode("lifetime :" + works[a].lifetime);
    para12.appendChild(lifetime);
    para12.className = "item";
    para12.style.display = "inline";
    para12.className = "inner-box";
    para1.appendChild(para11);
    para1.appendChild(para12);
    para1.className = "inner-box"

    var popular = document.createTextNode("Popular Photos");
    var para22 = document.createElement("div");
    para22.appendChild(popular);
    var para2 = document.createElement("div");
    para2.style.padding = "10px";
    para2.style.margin = "15px";
    para2.className = "inner-box";
    para2.appendChild(para22);
    for(i = 0 ; i < works[a].photos.length ; i++){
        var picture = document.createElement("img");
        picture.src = works[a].photos[i];
        picture.className = "photo";
        para2.appendChild(picture)
    }

    var button = document.createElement("button");
    button.textContent = "Visit";

    para.appendChild(para0);
    para.appendChild(para1);
    para.appendChild(para2);
    para.appendChild(button);

    var element = document.getElementsByClassName("flex-container justify");
    element[0].appendChild(para);
}


