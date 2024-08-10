import assert from 'assert';
import should from 'should';
import { isPalindrome } from '../palindrome/palindrome.js'

describe('Palindrome ', function () {
    it('A is a palindrome', function () {
        const result = isPalindrome("A")
        assert.equal(true, result, 'A is a palindrome')
    })

    it('Empty string is a palindrome', function () {
        const result = isPalindrome("")
        assert.equal(true, result, 'Empty string is a palindrome')
    })

    it('EYE is a palindrome', function () {
        const result = isPalindrome("EYE")
        assert.equal(true, result, 'EYE is a palindrome')
    })

    it('HELLO is not a palindrome', function () {
        const result = isPalindrome("HELLO")
        should.notDeepEqual(true, result, 'HELLO is not a palindrome');
    })

    it('12321 is a palindrome1', function () {
        const result = isPalindrome(12321);
        should.deepEqual(true, result, '12321 is a palindrome');
    })

    it('123 is not a palindrome', function () {
        const result = isPalindrome(123)
        should.deepEqual(false, result, '123 is not a palindrome');
    })

    it('-121 is a palindrome', function () {
        const result = isPalindrome(-121)
        should.deepEqual(true, result, '-121 is a palindrome');
    })

    it('-1100 is not a palindrome0', function () {
        const result = isPalindrome(-1100)
        should.deepEqual(false, result, '-1100 is not a palindrome');
    })

    it('0 is a palindrome', function () {
        const result = isPalindrome(0)
        should.deepEqual(true, result, '0 is a palindrome');
    })
})