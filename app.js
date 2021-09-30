text = document.getElementById("name");
mainPic = document.getElementById("mainpic");
title = document.getElementById("title");
next = document.getElementById("next");
oDate = document.getElementById("objDate")
overlay = document.getElementById("overlay")
modalPic = document.getElementById('modalpic')
let pictureSmall; 


async function getArt(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return await response.json()
    }
}


async function searchArt() {
    searchQ = ["Dutch", "Glass", "Jar", "House", "Waves", "France", "Rome", "Woman", "Girl", "School", "Cat", "Dog", "Bird", "Cow", "Italy", "Spain", "Russia", "Germany", "London", "Essex", "Trees", "Night", "Morning", "Sunflowers", "River", "Lake", "Japan", "Priest", "Monk", "Soldier", "New_York", "Kyoto", "India", "China", "Wind", "Sky", "Boats", "Hat", "Church", "Storm", "Horse", "Bowl", "Dress", "Ring"]

let sQ = Math.floor(Math.random() * searchQ.length);
    empty = await getArt(`https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&hasImages=true&q=${searchQ[sQ]}`)
    let num = Math.floor(Math.random() * empty.objectIDs.length);
    pic = await getArt(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${empty.objectIDs[num]}`)
    pictureSmall = pic.primaryImageSmall;
    mainPic.src = pictureSmall;
    objDate.innerHTML = pic.objectDate;
    title.innerHTML = pic.title;
    text.innerHTML = pic.artistDisplayName
}

searchArt()

mainPic.addEventListener("click", () => {
    overlay.style.zIndex = "3";
    overlay.style.display = "block";
    modalPic.src = pic.primaryImage;
}
)

overlay.addEventListener("click", () => {
    overlay.style.display = "none"
})

next.addEventListener("click", () =>
    searchArt()
)
