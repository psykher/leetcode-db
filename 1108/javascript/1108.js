// node 1108.js

var defangIPaddr = function (address) {
    let out = address.replace(/\./g, "[.]");
    return out;
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));
