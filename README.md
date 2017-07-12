# Functional Javascript

This is the code for the Functional JavaScript presentation in May 2017 for the JaxNode user group.

## Pure Functions

Pure functions will always return the same output given the same outputs.

```Javascript
function add(a, b) {
    return a + b;
}

const c1 = add(12, 14); // 26
const c2 = add(100, -1); // 99
const c3 = add(34, 17); // 51
```
## Non-Pure Functions

Non-pure functions generally are described as functions that have side effects. Side effects should be avoided because they can require or effect state outside of the function.

```Javascript
let state = 0;

function addToState(value) {
    state += value;
    return state;
}

let c1 = addToState(3); // 3
let c2 = addToState(4); // 7
let c3 = addToState(10); // 17
let c4 = addToState(-8); // 9
```

## Object factories vs Class

The Class keyword that was added to EcmaScript 2015 is considered controversial. 
In general purpose object oriented programming the Class keyword is usually used to denote an object definition. This could also be defined as a template for objects;

In languages such as C++, Java and C#, a class defines an object that can be instantiated.

```Csharp
// C#
public class Animal {
    public string Name { get; set; }
    public int Limbs { get; set; }
    
    public Animal(name, limbs) {
        this.Name = name;
        this.Limbs = limbs;
    }
    
    public void printAnimal() {
        if (this.Limbs == 0) {
            Console.PrintLine("You have a " + this.Name + " with no limbs.");
        } else if (this.Limbs == 1) {
            Console.PrintLine("You have a " + this.Name + " with " + this.Limbs.ToString() + " limb.");
        } else {
            Console.PrintLine("You have a " + this.Name + " with " + this.Limbs.ToString() + " limbs.");
        }
    }
}

var Cat = new Animal("Gato", 4);
var Dog = new Animal("Perro", 3);

Cat.printAnimal(); // You have a Gato with 4 limbs.
Dog.printAnimal(); // You have a Perro with 3 limbs.
```

In JavaScript this same Class could be constructed in the following way;

```Javascript
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
```
## Object Literals

Here is an example of creating the same object using object literal notation.

```Javascript
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
```

## Currying

Currying allows for the creation of functions that return other functions. 

```Javascript
const greeter = function(greeting) {
    return function(name) {
        console.log(`${greeting} there ${name}!`);
    }
};

const greet = greeter('Hi');
greet('David'); // Hi there David!
greet('Andy'); // Hi there Andy!

// or

greeter('Hi')('Frank'); // Hi there Frank!
```

## Higher Order Functions

Higher order functions are functions that can accept as a parameter or return another function. 
The filter, map and reduce functions on the Array object are considered higher order functions.

```Javascript
function numbersGTE12(item) {
    return (item => 12);
}

const myArray = [2, 4, 7, 9, 11, 14, 17, 21];
const secondArray = myArray.filter(numbersGTE12); // secondArray populated by 14, 17, 21;  
```

## Filter

The filter function was added to ES5.1, and takes a function as its parameter that returns a boolean to determine which items in the array should be returned. These functions can be used as anonymous functions or using the '=>' operator.

```Javascript
const orders = [
    { user: 'Dave', type: 'part', amount: 250 },
    { user: 'Dave', type: 'auto', amount: 400 },
    { user: 'Sam', type: 'service', amount: 100 },
    { user: 'Sam', type: 'analysis', amount: 325 },
    { user: 'Dave', type: 'part', amount: 100 },
    { user: 'Sam', type: 'auto', amount: 325 }
];

const filteredOrders = orders.filter(f => f.amount > 100);

console.log(filteredOrders);
// returns the following items;
/*
[
    { user: 'Dave', type: 'part', amount: 250 },
    { user: 'Dave', type: 'auto', amount: 400 },
    { user: 'Sam', type: 'analysis', amount: 325 },
    { user: 'Sam', type: 'auto', amount: 325 }
]; 
 */
```

## Map

Map is another example of a higher order function. Map allows for the programmer to change the items in an array to a new object or value.

```Javascript
// Add twenty percent tip to prices.
const totalsArray = [6.25, 7.80, 12.50, 20.10];
const priceWithTip = totalsArray.map(p => p * 1.2);
// result [ 7.5, 9.36, 15, 24.12 ]
```

## Reduce

Reduce can be used to group or sumarize values in an array. The combinations of map and reduce are very popular in Big Data analysis.

```Javascript
const totals = [ 7.5, 9.36, 15, 24.12 ];

const totalsWTip = totals.reduce((a, i) => {
    let deci = i * 120;
    let tip = deci / 100;
    a += tip;
    return a;
}, 0);
```

## Promises

Promises give a cleaner way of handling asyncronous behavior. In a lot of early Node.js development error first callbacks became the standard way of doing async. The fetch example below is a good example of how callbacks can be chained and handled in a linear way. This is also a example of the Monad pattern.

```Javascript
fetch('https://www.jaxnode.com/v1/api/meeting')
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json);
            })
            .catch(err => {
                console.error(err);
            });
```

Promises are defined by creating a Promise object, and using resolve and reject callback functions to handle the success or errors that may occur during execution.

```Javascript
// Copyright Mozilla.org
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
});
```

### Promisfy Error First Callbacks

Node.js v8 and newer has a mechanism for converting existing error first callbacks into promises.

```Javascript
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

stat('.')
    .then((stats) => {
      console.log(stats);
    })
    .catch((error) => {
      console.error(error);
    });
``` 

### Promises with Async and Await

The Async and Await keywords require the use of promises. Await is used in front of the promise instead of passing a function into the `then` method.

```Javascript
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}
```
