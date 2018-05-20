/*En este archivo se almacena toda la información de cada planeta, además de todas las referencias*/
const planetsData =
{
    "planets" : [
        {
            "name":"Mercurio",
            "distance": {"km": "57.909.175", "UA": "0,38709893"}, 
            "radious":"2.439,7", 
            "gravity": "2.8",
            "period":"58,646225",
            "temperature":"166,85",
            "moons": [
                {"name":"Ceres", "image":"Img/ceres.jpg"}
            ]
        },
        {
            "name": "Venus",
            "distance": {"km": "108.208.930", "0,72333199": ""}, 
            "radious":"6.051,8", 
            "gravity": "8,9	",
            "period":"-243,0187",
            "temperature":"456,85",
            "moons": [
                {"name":"", "image":""}
            ]
        },
        {
            "name": "Tierra",
            "distance": {"km": "149.597.870", "UA": "1"}, 
            "radious":"6.371", 
            "gravity": "9,81",
            "period":"0,99726968",
            "temperature":"14,85",
            "moons": [
                {"name":"Luna", "image":"Img/moon.jpg"}
            ]
        },
        {
            "name": "Marte",
            "distance": {"km": "227.936.640", "UA": "1,5236623"}, 
            "radious":"3.389,5", 
            "gravity": "3,71",
            "period":"1,02595675",
            "temperature":"-87,15 / -5,15",
            "moons": [
                {"name":"Fobos", "image":"Img/fobos.jpg"},
                {"name":"Deimos", "image":"Img/deimos.jpg"}
            ]
        },
        {
            "name": "Jupiter",
            "distance": {"km": "778.412.010", "UA": "5,20336301"}, 
            "radious":"69.911", 
            "gravity": "22,9",
            "period":"0,41354",
            "temperature":"-121,15",
            "moons": [
                {"name":"Io", "image":"Img/io.jpg"},
                {"name":"Europa", "image":"Img/europe.jpg"},
                {"name":"Gamínedes", "image":"Img/gaminedes.jpg"},
                {"name":"Calisto", "image":"Img/calisto.jpg"}
            ]
        },
        {
            "name": "Saturno",
            "distance": {"km": "1.426.725.400", "UA": "9,53707032"}, 
            "radious":"58.232", 
            "gravity": "9,1",
            "period":"0,44401",
            "temperature":"-139,15",
            "moons": [
                {"name":"Mimas", "image":"Img/mimas.jpg"},
                {"name":"Encelado", "image":"Img/encelado.jpg"},
                {"name":"Encelado", "image":"Img/tetis.jpg"},
                {"name":"Dione", "image":"Img/dione.jpg"},
                {"name":"Rea", "image":"Img/rea.jpg"},
                {"name":"Titán", "image":"Img/titan.jpg"},
                {"name":"Japeto", "image":"Img/japeto.jpg"}
            ]
        },
        {
            "name": "Urano",
            "distance": {"km": "2.870.972.200", "UA": "19,19126393"}, 
            "radious":"25.362", 
            "gravity": "7,8",
            "period":"-0,71833n",
            "temperature":"-197,15",
            "moons": [
                {"name":"Miranda", "image":"Img/miranda.jpg"},
                {"name":"Ariel", "image":"Img/ariel.jpg"},
                {"name":"Umbriel", "image":"Img/umbriel.jpg"},
                {"name":"Titania", "image":"Img/titania.jpg"},
                {"name":"Oberón", "image":"Img/oberon.jpg"}
            ]
        },
        {
            "name": "Neptuno",
            "distance": {"km": "4.498.252.900", "UA": "30,06896348"}, 
            "radious": "24.622", 
            "gravity": "11,00",
            "period": "0,67125",
            "temperature": "-220,15",
            "moons": [
                {"name":"Nayade", "image":"Img/NeptuneNayade.png"},
                {"name":"Talasa", "image":"Img/NeptuneNaiad.jpg"},
                {"name":"Despina", "image":"Img/NeptuneDespina.jpg"},
                {"name":"Larisa", "image":"Img/NeptuneLarisa.jpg"},
                {"name":"Proteo", "image":"Img/NeptuneTriton.jpg"},
                {"name":"Tritón", "image":"Img/NeptuneProteo.jpg"}
            ]
        }
    ]
}

const references = [
    {
        "title":"Imagen del Sol", 
        "link" : "http://travismallett.com/opus-29-2017-helios/"
    },
    {
        "title":"Imagen de Mercurio", 
        "link" : "https://sv.wikipedia.org/wiki/Kepler-37b#/media/File:Kepler-37b.jpg"
    },
    {
        "title":"Imagen de Venus", 
        "link" : "http://zinc.mondediplo.net/tag/venus"
    },   
    {
        "title":"Imagen de la Tierra", 
        "link" : "https://elgar.blog/tag/oas/"
    },
    {
        "title":"Imagen de Marte", 
        "link": "https://karnaval.com/yasam/marsta-akan-su-bulundugu-teorisi-coktu-19-506537-haber"
    },
    {
        "title":"Imagen de Júpiter", 
        "link": "http://orbiter.dansteph.com/forum/index.php?topic=14028.0"
    },
    {
        "title":"Imagen de Saturno", 
        "link": "http://solarviews.com/cap/sat/saturn.htm"
    },
    {
        "title":"Imagen de Urano", 
        "link": "https://www.sciencesetavenir.fr/espace/les-planetes-du-systeme-solaire_17/slide_7"
    },
    {
        "title":"Imagen de Neptuno", 
        "link": "http://www.sun.org/neptune"
    },
    {
        "title":"Imagen de la Luna", 
        "link": "https://www.flickr.com/photos/ju_cooper/15970837185/"
    },
    {
        "title":"Imagen de Deimos", 
        "link": "https://lauramparro.wordpress.com/2017/03/13/las-lunas-de-marte-fobos-y-deimos/"
    },
    {
        "title":"Imagen de Fobos", 
        "link": "https://lauramparro.wordpress.com/2017/03/13/las-lunas-de-marte-fobos-y-deimos/"
    },
    {
        "title":"Imagen de Io", 
        "link": "http://www.sci-news.com/space/science-io-magma-ocean-03236.html"
    },
    {
        "title":"Imagen de Europa", 
        "link": "http://www.ceskatelevize.cz/ct24/veda/1919447-nasa-ma-dalsi-dukaz-ze-na-jupiterove-mesici-europa-je-mozna-voda"
    },
    {
        "title":"Imagen de Gaminedes", 
        "link": "https://news.softpedia.com/news/Ganymede-Jupiter-s-Largest-Moon-Sports-a-Huge-Bulge-at-Its-Equator-477511.shtml"
    },
    {
        "title":"Imagen de Calisto", 
        "link": "http://www.geimurinn.is/myndasafn/album/12"
    },
    {
        "title":"Imagen de Mimas", 
        "link": "https://commons.wikimedia.org/wiki/File:Mimas_PIA12568.jpg"
    },
    {
        "title":"Imagen de Encelado", 
        "link": "https://deepuvishwakarma1.wordpress.com/"
    },
    {
        "title":"Imagen de Dione", 
        "link": "http://1024x.net/90/-/Saturn%27s_Moon_Dione_and_Rings/"
    },
    {
        "title":"Imagen de Rea", 
        "link": "http://www.esacademic.com/dic.nsf/eswiki/990477"
    },
    {
        "title":"Imagen de Japeto", 
        "link": "http://www.lettera43.it/it/foto/2017/09/04/sonda-cassini-le-foto-delle-meraviglie-di-saturno/10109/?page=8"
    },
    {
        "title":"Imagen de Miranda", 
        "link": "https://es.wikipedia.org/wiki/Miranda_(sat%C3%A9lite)"
    },
    {
        "title":"Imagen de Ariel", 
        "link": "https://it.wikipedia.org/wiki/Ariel_(astronomia)"
    },
    {
        "title":"Imagen de Umbriel", 
        "link": "https://planetologie.destination-orbite.net/umbriel.php"
    },
    {
        "title":"Imagen de Oberón", 
        "link": "https://es.wikipedia.org/wiki/Sistema_solar#/media/File:Voyager_2_picture_of_Oberon.jpg"
    },
    {
        "title":"Imagen de Nayade", 
        "link": "https://es.wikipedia.org/wiki/Sat%C3%A9lites_de_Neptuno#/media/File:Naiad_Voyager.png"
    },
    {
        "title":"Imagen de Talasa", 
        "link": "https://es.wikipedia.org/wiki/Sat%C3%A9lites_de_Neptuno#/media/File:Naiad_small.jpg"
    },
    {
        "title":"Despina", 
        "link": "https://es.wikipedia.org/wiki/Sat%C3%A9lites_de_Neptuno#/media/File:Despina.jpg"
    },
    {
        "title":"Larisa", 
        "link": "https://es.wikipedia.org/wiki/Sat%C3%A9lites_de_Neptuno#/media/File:Larissa_1.jpg"
    },
    {
        "title":"Proteo", 
        "link": "https://es.wikipedia.org/wiki/Sat%C3%A9lites_de_Neptuno#/media/File:Proteus_Voyager_2_(big).jpg"
    },
    {
        "title":"Tritón", 
        "link": "https://es.wikipedia.org/wiki/Sat%C3%A9lites_de_Neptuno#/media/File:Triton_moon_mosaic_Voyager_2_(large).jpg"
    },
    {
        "title": "Fondo",
        "link": "http://www.grupofenixcr.com/"
    }
]