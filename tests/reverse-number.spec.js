import assert from 'assert';
import { reverseNumber } from '../reverse-number/reverse-number.js'

describe('Reverse Int', function () {
    it('Reverse Int', function () {
        const result = reverseNumber(123)
        assert.equal(321, result)
    })

    it('Reverse Int -123', function () {
        const result = reverseNumber(-123)
        assert.equal(-321, result)
    })

    it('Reverse Int 12321', function () {
        const result = reverseNumber(12321)
        assert.equal(12321, result)
    })

    it('Reverse Int 1100', function () {
        const result = reverseNumber(1100)
        assert.equal(11, result)
    })

    it('Reverse Int -1100', function () {
        const result = reverseNumber(-1100)
        assert.equal(-11, result)
    })
})