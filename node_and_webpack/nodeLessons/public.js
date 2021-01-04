var fibonacci = function (n) {
    // typeof NaN === 'number' 是成立的，所以要判断 NaN
    if (typeof n !== 'number' || isNaN(n)) {
        throw new Error('n should be a Number');
    }
    if (n < 0) {
        throw new Error('n should >= 0')
    }
    if (n > 10) {
        throw new Error('n should <= 10');
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
};

module.exports.fibonacci = fibonacci;
module.exports.pubModule = module;
module.exports.pubMMain = require.main;