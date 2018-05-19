let isOpen = false;

const background = document.getElementById('background');

let itemDetail = document.getElementById('item-detail');

let moonsSec = document.getElementById("moons");

if(window.innerWidth > 425){
    background.style.height = `${window.innerHeight}px`;
    window.addEventListener("onresize", function(){
        background.style.height = `${window.innerHeight}px`;
    });
}

var planets = document.querySelectorAll('.item');
planets.forEach(planet => {
    planet.addEventListener('mouseover', (e) => {
        document.getElementById('planet-name').innerHTML = e.target.getAttribute('alt')
    })
    planet.addEventListener('click', (e) => {
        const planet = planetsData.planets.find((el) => el.name == e.target.getAttribute('alt'));
        document.getElementById('distanceKm').innerHTML = planet.distance.km;
        document.getElementById('distanceUa').innerHTML = planet.distance.UA;
        document.getElementById('radious').innerHTML = planet.radious;
        document.getElementById('gravity').innerHTML = planet.gravity;
        document.getElementById('pediod').innerHTML = planet.pediod;
        document.getElementById('temperature').innerHTML = planet.temperature;
        while (moonsSec.firstChild) {
            moonsSec.removeChild(moonsSec.firstChild);
        }
        if(moonsSec.childElementCount == 0){
            planet.moons.forEach(moon => {
                let article = document.createElement("article");
                let moonName = document.createElement("h3");
                moonName.innerHTML = moon.name;
                let img = document.createElement("img");
                img.setAttribute("src", moon.image);
                img.setAttribute("alt", moon.name);
                article.appendChild(moonName);
                article.appendChild(img);
                moonsSec.appendChild(article);
            })
        }
        console.log(`${itemDetail.offsetHeight}:${background.offsetHeight}`)
        if(itemDetail.offsetHeight > 350 && window.innerHeight > 420){
            console.log('asdasd');
            background.style.height = `${background.offsetHeight + 100}px`;
        }  
        itemDetail.classList.remove("hidden");           
    })
})

const closeButton = document.getElementById("close");
closeButton.addEventListener('click', (e) => {
    e.preventDefault;
    while (moonsSec.firstChild) {
        moonsSec.removeChild(moonsSec.firstChild);
    }
    if(window.innerWidth > 425){
        background.style.height = `${window.innerHeight}px`;
    }
    itemDetail.classList.add("hidden");
});