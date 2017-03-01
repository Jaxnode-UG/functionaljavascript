

const flatOrders = `Dave,part,250
Dave,auto,400,
Sam,service,100,
Sam,analysis,325
Dave,part,100
Sam,auto,325`;

const orderArray = flatOrders.split('\n').map(m => ({ name: m.split(',')[0], type: m.split(',')[1], price: m.split(',')[2] }));

console.log(orderArray);
