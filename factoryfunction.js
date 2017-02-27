// From @mpjme https://medium.com/humans-create-software/factory-functions-in-javascript-video-d38e49802555#.vbu5vso8n

const dog = () => {
    const sound = 'woof!';
    return {
        talk: () => console.log(sound)
    }
}

const sniffles = dog();
sniffles.talk();

$('button.myButton').click(sniffles.talk); // Yeah, it worked! 