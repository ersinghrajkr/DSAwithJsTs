
/**
 * 
 * @param {*} sentanceStr 
 * @returns Reverse of sentance string
 * ------Examples
 * reverseSentance("I Love JavaScript") === 
 */
function reverseSentance(sentanceStr) {
    // split(" ") by space
    let sentanceStrArray = sentanceStr.split(" ")
    sentanceStrArray.reverse();
    return sentanceStrArray.join(' ');
}

function charAtReverseSentance(sentenceStr) {
    let reversed = '';
    for(let chracter of sentenceStr) {
        reversed = chracter + reversed;
    }
    return reversed
}

export {
    reverseSentance,
    charAtReverseSentance
}

// module.exports = {
//     reverseSentance
// }