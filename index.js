class Test {
    constructor(name) {
        this.name = name
    }
}


const globalTest = new Test('globalTest');
const globalString = 'globalString';

// creating scope inside this only it means local scope
{
    const localTest = new Test('localTest');
    const localString = 'localString';
}