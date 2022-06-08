// tsc 1108.ts
// node 1108.js

function defangIPaddr(address: string): string {
    let out: string = address.replace(/\./g, "[.]");
    return out;
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));
