const str = 'some value'

function fn() {
    console.log('some log')
}

const add = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    return NaN;
};

console.log('测试husky的pre-commit钩子')

module.exports = { add };
