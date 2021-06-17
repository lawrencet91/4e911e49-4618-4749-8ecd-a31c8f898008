import fs from 'fs';
import {getLongSubsequentList} from "../src/index";
describe("test getLongSubsequentList function", () => {
  const test01Result = '1 5 9';
  const test02Result = '1710 2461 9288 10195 10431 12485';
  const test03Result = '10298 10897 12291 15037 18446 23435 25333 27266';
  const test04Result = '3862 16353 22813 28735';
  const test05Result = '11084 11970 24975 30922';
  const test06Result = '3808 3908 10386 19306';
  const test07Result = '125 1841 5882 18464 28317 31497';
  const test08Result = '9139 17687 25106 26202 27592 30937';
  const test09Result = '918 1089 5133 7725 18035 24605 26716 27095';
  const test10Result = '2 4 6';
  const test11Result = '1 5 9';


  it("Test Case 01", () => {
    const input = fs.readFileSync('fixtures/test01.txt','utf8');
    expect(getLongSubsequentList(input)).toBe(test01Result);
  });

  it("Test Case 02", () => {
    const input = fs.readFileSync('fixtures/test02.txt','utf8');
    expect(getLongSubsequentList(input)).toBe(test02Result);
  });

  it("Test Case 03", () => {
    const input = fs.readFileSync('fixtures/test03.txt','utf8');
    expect(getLongSubsequentList(input)).toBe(test03Result);
  });

  it("Test Case 04", () => {
    const input = fs.readFileSync('fixtures/test04.txt','utf8');
    expect(getLongSubsequentList(input)).toBe(test04Result);
  });

  it("Test Case 05", () => {
    const input = fs.readFileSync('fixtures/test05.txt','utf8');
    expect(getLongSubsequentList(input)).toBe(test05Result);
  });

  it("Test Case 06", () => {
    const input = fs.readFileSync('fixtures/test06.txt','utf8');
    expect(getLongSubsequentList(input)).toBe(test06Result);
  });

  it("Test Case 07", () => {
    const input = fs.readFileSync('fixtures/test07.txt','utf8');
    expect(getLongSubsequentList(input)).toBe(test07Result);
  });

  it("Test Case 08", () => {
    const input = fs.readFileSync('fixtures/test08.txt','utf8');
    expect(getLongSubsequentList(input)).toBe(test08Result);
  });

  it("Test Case 09", () => {
    const input = fs.readFileSync('fixtures/test09.txt','utf8');
    expect(getLongSubsequentList(input)).toBe(test09Result);
  });

  it("Test Case 10", () => {
    const input = fs.readFileSync('fixtures/test10.txt','utf8');
    expect(getLongSubsequentList(input)).toBe(test10Result);
  });

  it("Test Case 11", () => {
    const input = fs.readFileSync('fixtures/test11.txt','utf8');
    expect(getLongSubsequentList(input)).toBe(test11Result);
  });
});