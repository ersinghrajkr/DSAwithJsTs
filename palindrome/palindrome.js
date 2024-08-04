import { reverseNumber } from "../reverse-number/reverse-number.js";
import { reverse } from "../reverse-string/reverseString.js";


export function isPalindrome(userInput) {
    if (typeof userInput === 'string') {
        if (userInput.length <= 1) {
            return true;
        }
        return reverse(userInput) === userInput;
    } else {
        if (userInput === 0) {
            return true;
        }
        return reverseNumber(userInput) === userInput
    }
}
