# Solution to find longest increasing subsequence

## Problem
Develop a function that takes one string input of any number of integers separated by single whitespace. 
The function then outputs the longest increasing subsequence (increased by any number) present in that sequence.
If more than 1 sequence exists with the longest length, output the earliest one. You may develop supporting functions as many as you find reasonable.

## Solution
- This function is developed in TypeScript with TDD approach.
- There is 11 test cases in __tests__ folder.
- The idea is:
  - split the user input with whitespace and returns an array
  - loop the array to compare the value of currentIndex and nextIndex
  - from the comparison, get the index of starting point and ending point of the subsequence

## CI pipeline
- Integrated with Github action to run test and linting.

## Docker-compose
- The command docker-compose run test will run all the 11 test cases.
