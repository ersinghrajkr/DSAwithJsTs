


function reverseNumber(num) {
    let originalNum = Math.abs(num);
    let reversed = 0;
    while (originalNum > 0) {
        let remainder = originalNum % 10;
        reversed = reversed * 10 + remainder;
        originalNum = Math.floor(originalNum / 10);
    }
    return Math.sign(num) * reversed;

}

export {
    reverseNumber
}