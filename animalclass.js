
class Animal {
    constructor(name, limbs) {
        this.Name = name;
        this.Limbs = limbs;
    }
    
    printAnimal() {
        if (this.Limbs == 0) {
            console.log(`You have a ${this.Name} with no limbs.`);
        } else if (this.Limbs == 1) {
            console.log(`You have a ${this.Name} with ${this.Limbs} limb.`);
        } else {
            console.log(`You have a ${this.Name} with ${this.Limbs} limbs.`);
        }
    }
}

const Cat = new Animal('Gato', 4);
const Dog = new Animal('Perro', 3);

Cat.printAnimal(); // You have a Gato with 4 limbs.
Dog.printAnimal(); // You have a Perro with 3 limbs.