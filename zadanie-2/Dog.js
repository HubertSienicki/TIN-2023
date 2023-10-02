export default class Dog extends Animal{
    constructor(race, diet) {
        super("Dog", diet);
        this.race = race
    }
    woof() {
        return "woof, woof";
    }
}