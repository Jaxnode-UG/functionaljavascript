
const sounder = (state) => ({
    makeSound: () => console.log(state.sound)
});

const namer = (state) => ({
    sayName: () => console.log(`My name is ${state.name}.`)
})

const state = { 
    name: 'Bill',
    sound: 'Ack Ack!'
};

const cat = Object.assign({}, sounder(state), namer(state));

cat.makeSound();
cat.sayName();
