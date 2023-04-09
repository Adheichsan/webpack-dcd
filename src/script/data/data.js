import sepatucompass from "./compass.js";

class data {
    static searchMenu(keyword){
        return new Promise((resolve, reject) => {
            const filteredMenu = sepatucompass.filter(menu => menu.name.toUpperCase().includes(keyword.toUpperCase()));

            if (filteredMenu.length) {
                resolve(filteredMenu);
            }else {
                reject(`${keyword} is not found`);
            }
        });
    }
}

export default data;