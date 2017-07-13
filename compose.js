
const animal = (name, type) => {
  return {
    name: name,
    type: type
  };
}

const speakingAnimal = {
  speak: function() { console.log(`My name is ${this.name}, and I am a ${this.type}`); }
};

const myCat = animal('Bebe', 'Gato');
const meowingCat = Object.assign({}, myCat, speakingAnimal);
meowingCat.speak();
