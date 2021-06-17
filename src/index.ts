/**
* Returns the longest subsequent list
*
* @param input - The user input
* @returns string of longest subsequent number
*
*/
export function getLongSubsequentList (input: string): string {
  const inputList: string[] = input.split(' ');
  let currentLength: number = 1;
  let longestLength: number = 1;
  let firstIndex: number = 0;
  let lastIndex: number = 0;

  inputList.forEach((element, index) => {
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

  return inputList.slice(firstIndex, lastIndex).join(" ").toString();
};