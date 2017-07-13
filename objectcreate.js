// Copyright Mozilla
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

let o = Object.create({}, {
  // foo is a regular 'value property'
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get: function() { return 10; },
    set: function(value) {
      console.log('Setting `o.bar` to', value);
    }
  }
});

o.bar = 'JaxNode';
console.log(`${o.foo} ${o.bar}`);

const person = {
  sayName: function () { 
    console.log(`my name is ${this.myName}`) 
  }
}

const baz = Object.create(person, 
  { myName: { 
    get: function() { return 'Frank'; } 
  } 
});

baz.sayName(); // my name is Frank

const personWithName = {
  init: function(name) {
    this.myName = name;
    return this;
  },
  sayName: function () { 
    console.log(`my real name is ${this.myName}`) 
  }
};

const bob = Object.create(personWithName).init('Bob');
bob.sayName();
