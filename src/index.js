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
    var inputList = input.split(' ');
    var currentLength = 1;
    var longestLength = 1;
    var firstIndex = 0;
    var lastIndex = 0;
    var longestSubsequence = '';
    inputList.forEach(function (element, index) {
        if (+inputList[index] < +inputList[index + 1]) {
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
    // for (let i: number = firstIndex; i < lastIndex; i++) {
    //   longestSubsequence += inputList[i] + " ";
    // }
    return inputList.slice(firstIndex, lastIndex).join(" ").toString();
    // longestSubsequence.trim();
}
exports.getLongSubsequentList = getLongSubsequentList;
;
