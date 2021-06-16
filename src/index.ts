/**
* Returns the longest subsequent list
*
* @param input - The user input
* @returns list
*
*/
export function getLongSubsequentList (input: string): string {
  const inputList = input.split(' ');
  let currentLength = 1;
  let longestLength = 1;
  let firstIndex = 0;
  let lastIndex = 0;
  for (let i = 0; i < inputList.length - 1; i++) {
    if (+inputList[i] < +inputList[i+1]) {
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
  let str = '';
  for (let i = firstIndex; i < lastIndex; i++) {
    str += inputList[i] + " ";
  }
  return str.trim();
};