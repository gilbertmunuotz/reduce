// REDUCE METHOD
// const numbers = [2, 4, 6, 8];

// const total = numbers.reduce((pV, cV) => {
// console.log(`previous: ${pV}`);
// console.log(`current: ${cV}`);
//     return pV + cV;
// }, 0);

// console.log(total);


let peope = [

    {
        name: 'sia',
        age: 21
    },
    {
        name: 'josh',
        age: 41
    },
    {
        name: 'clay',
        age: 1
    },
];

const newAge = peope.reduce((I, C) => {  // I = Initial Value, C = Current Value

    if (C.age > I) {
        return C.age;
    }
    return I;
}, 0); // 0 = Initial Value

console.log(newAge);