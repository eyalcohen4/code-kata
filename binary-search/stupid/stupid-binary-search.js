function search(array, target) {
    let min = 0;
    let max = array.length - 1;
    let middle;

    if (max < min) {
        return -1;
    }

    while (min <= max) {
        middle = Math.floor((min + max) / 2);

        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            min = middle + 1; 
        } else {
            max = middle - 1;
        }

    }

    return -1;

}

module.exports = search;