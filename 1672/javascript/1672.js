// node 1672.js

var maximumWealth = function(accounts) {
    let hb = 0;

    accounts.map((customer) => {
        let bb = 0;
        customer.map((balance) => { bb += balance; });
        hb = (bb > hb) ? bb : hb;
    });

    return hb;
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));