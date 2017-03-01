
const orders = [
    { user: 'Dave', type: 'part', amount: 250 },
    { user: 'Dave', type: 'auto', amount: 400 },
    { user: 'Sam', type: 'service', amount: 100 },
    { user: 'Sam', type: 'analysis', amount: 325 },
    { user: 'Dave', type: 'part', amount: 100 },
    { user: 'Sam', type: 'auto', amount: 325 }
];

const reducedUsers = orders.reduce((u, o) =>  {
    u[o.user] = u[o.user] || [];
    u[o.user].push({
        type: o.type,
        amount: o.amount
    });
    return u;
}, {});

console.log(reducedUsers);
