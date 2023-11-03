const str = 'some value'

function fn() {
    console.log(str)
}

const add = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    return NaN;
};

fn()

module.exports = { add };
