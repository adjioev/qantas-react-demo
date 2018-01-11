/**
 * Interface for mockup data.
 * 
 */
const CarAPI = {
    files: {
        modelsFile: 'models.json',
        makesFile: 'makes.json',
        carOfTheWeekFile: 'carOfTheWeek.json'
    },

    fetch: function (file) {
        return fetch(`/assets/${file}`, {
            accept: 'application/json'
        }).then(response => response.json());
    },

    getCarOfTheWeek: function () {
        return this.fetch(this.files.carOfTheWeekFile);
    },

    getMakes: function () {
        return this.fetch(this.files.makesFile);
    },

    getModels: function () {
        return this.fetch(this.files.modelsFile);
    },

    getMakeModels: function(id) {
        return this.getModels().then(data => data.filter(car => car.makeId === id));
    },

    getModelById: function (id) {
        return this.getModels().then(data => data.find(car => car.id === id));
    }
}

export default CarAPI

