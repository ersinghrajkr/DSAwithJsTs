import assert from 'assert';
import { reverseSentance, charAtReverseSentance } from '../reverse-string/reverseSentance.js';
import { reverse, customReverse, charAtReverse, reduceReverse } from '../reverse-string/reverseString.js';
// let { reverse } = require('../reverse-string/reverseString');
// let { reverseSentance } = require('../reverse-string/reverseSentance');

describe('String-Sentance Reverse', function () {

    describe('Reverse Word', function() {
        it('reverseOutput', function () {
            const reverseOutput = reverse("APPLE");
            assert.equal(reverseOutput, "ELPPA");
        });

        it('customReverseOutput', function () {
            const customReverseOutput = customReverse("APPLE");
            assert.equal(customReverseOutput, "ELPPA");
        });

        it('charAtReverseOutput', function () {
            const charAtReverseOutput = charAtReverse("APPLE");
            assert.equal(charAtReverseOutput, "ELPPA");
        });
        it('reduceReverseOutput', function () {
            const reduceReverseOutput = reduceReverse("APPLE");
            assert.equal(reduceReverseOutput, "ELPPA");
        });
    })

    describe('Reverse Sentance', function() {
        it('reverseSentanceResult', function () {
            const reverseSentanceResult = reverseSentance("I Love JavaScript!");
            assert.equal(reverseSentanceResult, "JavaScript! Love I");
        });

        it('charAtReverseSentanceResult', function () {
            const charAtReverseSentanceResult = charAtReverseSentance("I Love JavaScript!");
            assert.equal(charAtReverseSentanceResult, "!tpircSavaJ evoL I");
        });
        
    })
});