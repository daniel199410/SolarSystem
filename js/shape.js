const background = document.getElementById('background');
const closeButton = document.getElementById("close");
let itemDetail = document.getElementById('item-detail');
let moonsSec = document.getElementById("moons");

if(window.innerWidth > 425){
    background.style.height = `${window.innerHeight}px`;
    window.addEventListener("onresize", function(){
        background.style.height = `${window.innerHeight}px`;
    });
}

var planets = document.querySelectorAll('.item');
//Por cada planeta en data, haga =>
planets.forEach(planet => {
    planet.addEventListener('mouseover', (e) => {
        /*Cuando se pone el mouse sobre algún elemento, se extrae su nombre respecctivo
        y se le asigna al p con id = "planet-name"*/
        document.getElementById('planet-name').innerHTML = e.target.getAttribute('alt')
    })
    planet.addEventListener('click', (e) => {
        //Se busca un planeta en planetsData que tenga el mismo nombre que el elemento al que se le hizo click
        const planet = planetsData.planets.find((el) => el.name == e.target.getAttribute('alt'));
        /** Se agregan los datos del planeta encontrado a los diferentes elementos del article item-detail*/
        document.getElementById('distanceKm').innerHTML = planet.distance.km;
        document.getElementById('distanceUa').innerHTML = planet.distance.UA;
        document.getElementById('radious').innerHTML = planet.radious;
        document.getElementById('gravity').innerHTML = planet.gravity;
        document.getElementById('pediod').innerHTML = planet.pediod;
        document.getElementById('temperature').innerHTML = planet.temperature;
        /** Se remueven todas las lunas existentes dentro de article-detail, para para que en caso de
         * que si el usuario hace click sobre un planeta mientras tiene abierto la ventana de información,
         * se pueda actualizar la información con las lunas del nuevo planeta seleccionado
         */
        while (moonsSec.firstChild) {
            moonsSec.removeChild(moonsSec.firstChild);
        }
        /** Por cada luna que tenga el planeta en Data haga =>  */
        planet.moons.forEach(moon => {
            //Cree un article
            let article = document.createElement("article");
            //Cree un h3
            let moonName = document.createElement("h3");
            moonName.innerHTML = moon.name;
            //Cree un elemento img
            let img = document.createElement("img");
            //Se agrega a la imagen la ruta y el alt almacenados en data del respectivo satélite
            img.setAttribute("src", moon.image);
            img.setAttribute("alt", moon.name);
            /** Se le agrega al article el h3 y la img antes creados */
            article.appendChild(moonName);
            article.appendChild(img);
            //Se agrega el article a moonSec (El contenedor de todos los artículos que contienen lunas)
            moonsSec.appendChild(article);
        })
        if(itemDetail.offsetHeight > 350 && window.innerHeight > 420){
            console.log('asdasd');
            background.style.height = `${background.offsetHeight + 100}px`;
        }  
        //Se muestra el artícle
        itemDetail.classList.remove("hidden");           
    })
})

/** Cuando el usuario hace click en "X" haga => */
closeButton.addEventListener('click', (e) => {
    //Evite que la página se refresque
    e.preventDefault;
    //Remueva todos los elementos hijo contenidos en el section moons 
    while (moonsSec.firstChild) {
        moonsSec.removeChild(moonsSec.firstChild);
    }
    //Restaure la altura inicial de la ventana
    if(window.innerWidth > 425){
        background.style.height = `${window.innerHeight}px`;
    }
    //Oculte el article de información específica del planeta
    itemDetail.classList.add("hidden");
});