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
