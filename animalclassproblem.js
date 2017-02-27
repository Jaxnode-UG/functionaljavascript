// From @mpjme https://medium.com/humans-create-software/factory-functions-in-javascript-video-d38e49802555#.vbu5vso8n

class Dog {
  constructor() {
    this.sound = 'woof';
  }
  talk() {
    console.log(this.sound);
  }
}
const sniffles = new Dog();
sniffles.talk(); // Outputs: "woof"


$('button.myButton').click(sniffles.talk); // This will break!!!

$('button.myButton').click(sniffles.talk.bind(this)); // This will work

$('button.myButton').click( _ => sniffles.talk() ); // This will work too