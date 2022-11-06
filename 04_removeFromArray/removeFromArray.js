const removeFromArray = function(array, ...idx_a) {
    for (const idx of idx_a)
        array = array.filter(a => a !== idx);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
