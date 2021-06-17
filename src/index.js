"use strict";
exports.__esModule = true;
exports.getLongSubsequentList = void 0;
/**
* Returns the longest subsequent list
*
* @param input - The user input
* @returns string of longest subsequent number
*
*/
function getLongSubsequentList(input) {
    var inputList = input.split(" ").map(function (n) { return parseInt(n); });
    var currentLength = 1;
    var longestLength = 1;
    var firstIndex = 0;
    var lastIndex = 0;
    inputList.forEach(function (element, index) {
        if (element < inputList[index + 1]) {
            currentLength++;
            if (currentLength > longestLength) {
                longestLength = currentLength;
                firstIndex = index + 2 - currentLength;
                lastIndex = index + 2;
            }
        }
        else {
            currentLength = 1;
        }
    });
    return inputList.slice(firstIndex, lastIndex).join(" ");
}
exports.getLongSubsequentList = getLongSubsequentList;
;
