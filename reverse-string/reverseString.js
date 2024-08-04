/**
 * 
 * @param {*} str 
 * @returns Reverse of str
 */
function reverse(str) {
    return str.split('').reverse().join('');
}

function customReverse(str) {
    let result = [];
    let strArr = str.split('');
    strArr.forEach((element,index) => {
        result[strArr.length-index] = element;
    });
    return result.join('');
}

function charAtReverse(str) {
    // let result = [];
    // let strLength = str.length;
    // for(let i=0; i< strLength; i++) {
    //     result[strLength-i]= str.charAt(i);
    // }
    // return result.join('')
    let reversed = '';
    for(let chracter of str) {
        reversed = chracter + reversed;
    }
    return reversed
}

function reduceReverse(str) {
    debugger;
    return str.split('').reduce((reversed, currCharacter, index) => currCharacter + reversed, '');
}


export {
    reverse,
    customReverse,
    charAtReverse,
    reduceReverse
}

// module.exports = reverse
