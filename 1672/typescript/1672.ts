// tsc 1672.ts

function maximumWealth(accounts: number[][]): number {
    let hb: number = 0;

    accounts.map((customer) => {
        let bb: number = 0;
        customer.map((balance) => { bb += balance; });
        hb = (bb > hb) ? bb : hb;
    });

    return hb;
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));