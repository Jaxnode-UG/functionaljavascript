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

## Higher Order Functions

Higher order functions are functions that can accept as a parameter or return another function. 
The filter, map and reduce functions on the Array object are considered higher order functions.

```Javascript
const myArray = [2, 4, 7, 9, 11, 14, 17, 21];
const secondArray = myArray.filter(i => i >= 12); // secondArray populated by 14, 17, 21;  
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
