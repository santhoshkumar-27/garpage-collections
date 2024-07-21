
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
document.addEventListener('click', e => {
    const a = `${e.pageX}`

    console.log('click', a)
})