

const MakeAnimal = (name, limbs) => {
    const Name = name;
    const Limbs = limbs;
    return {
        printAnimal: () => {
            if (Limbs == 0) {
                console.log(`You have a ${Name} with no limbs.`);
            } else if (Limbs == 1) {
                console.log(`You have a ${Name} with ${Limbs} limb.`);
            } else {
                console.log(`You have a ${Name} with ${Limbs} limbs.`);
            }    
        }    
    }
};

const Cat = MakeAnimal('Gato', 4);
const Dog = MakeAnimal('Perro', 3);

Cat.printAnimal(); // You have a Gato with 4 limbs.
Dog.printAnimal(); // You have a Perro with 3 limbs.
