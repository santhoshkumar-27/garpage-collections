
class Test {
    constructor(name) {
        this.name = name
    }
}

// for heap snapshot
// const globalTest = new Test('globalTest');
// const globalString = 'globalString';

// // creating scope inside this only it means local scope
// {
//     const localTest = new Test('localTest');
//     const localString = 'localString';

// }

/**
 * Objects, and array are garpage collection when things are not in use
 * for primitive data type it will does not garpage collected
 */

// Allocation instrumentations on timeline, record specific time need for memory expansions
// document.addEventListener('click', e => {
//     const a = `${e.pageX}`

//     console.log('click', a)
// })

// it doesn't automatically garpage collected when keys are not referenced in the applications, because it keys is primitive
// this does the memory leaking
// const data = new Map()
// let index = 1;
// setInterval(() => {
//     data.set(index, `${index} - Index`);
//     index++; 
// }, 1);

// it automatically garpage collected when keys are not referenced in the applications, because it keys is non-primitive
const data = new WeakMap();
const obj = {index: -1};
data.set(obj, `${-1} - Index`);

let index = 1;
setInterval(() => {
    const objt = {index}
    data.set(objt, `${index} - Index`);
    index++; 
}, 1);