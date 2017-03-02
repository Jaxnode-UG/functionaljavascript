
const totals = [ 7.5, 9.36, 15, 24.12 ];

const totalsWTip = totals.reduce((a, i) => {
    let deci = i * 120;
    let tip = deci / 100;
    a += tip;
    return a;
}, 0);

console.log(totalsWTip);
