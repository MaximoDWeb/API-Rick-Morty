const spinner = document.getElementById('spinner');
const contenedorCards = document.getElementById('cards-dinamicas');
const cardsTemplate = document.getElementById('template-cards');
const fragment = document.createDocumentFragment();



const obtenerInfo = async () => {
    loading(true);
    try {
        const data = await fetch('https://rickandmortyapi.com/api/character');
        const info = await data.json();
        mostrarInfo(info);


        // consumir la api // 2s

    } catch (error) {
        console.log(error);
    } finally {
        loading(false);
    }
};

const mostrarInfo = (info) => {
    info.results.forEach((item) => {
        const clone = cardsTemplate.content.cloneNode(true);
        clone.querySelector('.card-img-top').src = item.image;
        clone.querySelector('.card-img-top').alt = `${item.name} + ${item.id}`;
        clone.querySelector('.card-title').textContent = item.name;
        clone.querySelector('.card-text').textContent = item.status;
        fragment.appendChild(clone);
    });
    contenedorCards.appendChild(fragment);
};

const loading = (estado) => {
    if (estado) {
        spinner.classList.remove('d-none');
    } else {
        spinner.classList.add('d-none');
    }
}

obtenerInfo()

