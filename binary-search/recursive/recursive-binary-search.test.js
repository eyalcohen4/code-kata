const assert = require('assert');
const bs     = require('./recursive-binary-search');

describe('recoursive-search', () => {
    
    describe('#search', () => {
        const array = [1, 5, 6, 7, 11, 25, 89, 99, 100];

        it('should return the index of the given element', () => {

            assert.equal(array.indexOf(25), bs(array, 25, 0, array.length - 1));
            assert.equal(array.indexOf(1), bs(array, 1,  0, array.length - 1));
            assert.equal(array.indexOf(6), bs(array, 6,  0, array.length - 1));
            assert.equal(array.indexOf(100), bs(array, 100,  0, array.length - 1));

        })

        it('should return -1 because the element isnt inside the array', () => {

            assert.equal(-1, bs(array, 200,  0, array.length - 1));
            assert.equal(-1, bs(array, 2,  0, array.length - 1));
            assert.equal(-1, bs(array, 70,  0, array.length - 1));

        }) 


    })

})
