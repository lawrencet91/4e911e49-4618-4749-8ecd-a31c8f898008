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
    for (var i = 0; i < inputList.length - 1; i++) {
        if (+inputList[i] < +inputList[i + 1]) {
            currentLength++;
            if (currentLength > longestLength) {
                longestLength = currentLength;
                firstIndex = i + 2 - currentLength;
                lastIndex = i + 2;
            }
        }
        else {
            currentLength = 1;
        }
    }
    var str = '';
    for (var i = firstIndex; i < lastIndex; i++) {
        str += inputList[i] + " ";
    }
    return str.trim();
}
exports.getLongSubsequentList = getLongSubsequentList;
;
