/**
* Returns the longest subsequent list
*
* @param input - The user input
* @returns string of longest subsequent number
*
*/
export function getLongSubsequentList (input: string): string {
  const inputList = input.split(" ").map(n => parseInt(n));
  let currentLength = 1;
  let longestLength = 1;
  let firstIndex = 0;
  let lastIndex = 0;

  inputList.forEach((element, index) => {
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
};