let referencesSection = document.getElementById('references');

/*Por cada elemento existente en la variable references del archivo data.js, se crea 
un elemento a, que a su vez se agrega a un elemento p, para finalmente, agregar este
último al div que contiene todas las referencias*/
references.forEach(reference => {
    let p = document.createElement('p');
    let a = document.createElement('a');
    a.setAttribute('href', reference.link);
    a.setAttribute('target', '_blank');
    a.innerHTML = `${reference.title}: ${reference.link}`;
    p.appendChild(a);
    referencesSection.appendChild(p);
})
