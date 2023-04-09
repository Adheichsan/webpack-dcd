import data from "../data/data.js";

const main = () => {
    const searchElement = document.querySelector('#searchElement');
    const searchButtonElement = document.querySelector('#searchButtonElement');
    const menuListElement = document.querySelector('#menuList');
    
    const onButtonSearchClicked = async () => {
        try {
          const result = await data.searchMenu(searchElement.value);
          renderResult(result);
        } catch (message) {
          fallbackResult(message);
        }
    };

    const renderResult = results => {
        menuListElement.innerHTML = '';
    
        results.forEach(sepatucompass => {
          const {name, gambar, jenis, harga, deskripsi} = sepatucompass;
          const sepatucompassElement = document.createElement('div');
          sepatucompassElement.setAttribute('class', 'sepatucompass');
    
          sepatucompassElement.innerHTML = `
            <img class="gambar-sepatucompass" src="${gambar}" alt="Gambar">
            <div class="sepatucompass-info">
              <h2>${name}</h2>
              <p>${jenis}</p>
              <h3>${harga}</h3>
              <p>${deskripsi}</p>
            </div>
          `;
    
          menuListElement.appendChild(sepatucompassElement);
        });
    };

    const fallbackResult = message => {
        menuListElement.innerHTML = '';
        menuListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };
    
    searchButtonElement.addEventListener('click', onButtonSearchClicked);
};

export default main