function recursion(array, target, min, max) {
    if (min > max) {
        return -1;
    }

    var middle = Math.floor((min + max) / 2);

    if (array[middle] === target) {
        return middle;
    } else if (array[middle] < target) {
        return recursion(array, target, (middle + 1), max);
    } else {
        return recursion(array, target, min, (middle - 1));        
    }

}

module.exports = recursion;