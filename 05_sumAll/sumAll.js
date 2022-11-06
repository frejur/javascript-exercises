const sumAll = function(...bounds) {
    if (bounds[0] < 0 || bounds[1] < 0 ||
        typeof bounds[0] !== "number" ||
        typeof bounds[1] !== "number")
    {
            return "ERROR";
    }
    bounds = bounds.slice(0,2).sort();
    return (bounds[0] < bounds[1] ? bounds[1] + sumAll(bounds[0], --bounds[1]) : bounds[0]);
};

// Do not edit below this line
module.exports = sumAll;
