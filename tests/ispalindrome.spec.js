import assert from 'assert';
import should from 'should';
import { isPalindrome } from '../palindrome/palindrome.js'

describe('Palindrome ', function() {
    it('Is String Palindrome - EYE', function(){
        const result = isPalindrome("EYE")
        assert.equal(true, result)
    })

    it('Is String Palindrome - HELLO', function(){
        const result = isPalindrome("HELLO")
        should.notDeepEqual(true, result);
    })

    it('Is Number Palindrome 12321', function(){
        const result = isPalindrome(12321);
        // console.log("Is Number 12321 Palindrome-", result);
        should.deepEqual(true, result);
    })

    it('Is Number Palindrome 123', function(){
        const result = isPalindrome(123)
        // console.log("Is Number 123 Palindrome-", result);
        should.deepEqual(false, result);
    })

    it('Is Number Palindrome -121', function(){
        const result = isPalindrome(-121)
        // console.log("Is Number 123 Palindrome-", result);
        should.deepEqual(true, result);
    })

    it('Is Number Palindrome -1100', function(){
        const result = isPalindrome(-1100)
        // console.log("Is Number 123 Palindrome-", result);
        should.deepEqual(false, result);
    })

    it('Is Number Palindrome 000', function(){
        const result = isPalindrome(0)
        // console.log("Is Number 123 Palindrome-", result);
        should.deepEqual(true, result);
    })
})