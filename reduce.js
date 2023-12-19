const numbers = [2, 4, 6, 8];

const total = numbers.reduce((pV, cV) => {
    // console.log(`previous: ${pV}`);
    // console.log(`current: ${cV}`);
    return pV + cV;
}, 0);


console.log(total);