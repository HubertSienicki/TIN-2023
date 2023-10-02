export default class Animal {
    constructor(species, diet) {
        this.species = species;
        this.diet = diet;
    }

    sayHello(){
        return `Hello, I am a ${this.species} and I eat ${this.diet}`;
    }
}