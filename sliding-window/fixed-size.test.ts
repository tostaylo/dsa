import { describe, it, expect } from "bun:test";
import { containsFixedWindow, maxSubarraySum } from "./fixed-size";

describe("maxSubarraySum - fixed sliding window", () => {
  it("returns max sum for normal positive numbers", () => {
    const nums = [2, 1, 5, 1, 3, 2];
    const k = 3;

    // Windows:
    // [2,1,5] = 8
    // [1,5,1] = 7
    // [5,1,3] = 9
    // [1,3,2] = 6

    expect(maxSubarraySum(nums, k)).toBe(9);
  });
});

describe("containsFixedWindow", () => {
  it("should return true if there are two elements within a window of size k that are equal", () => {
    expect(containsFixedWindow([1, 2, 3, 1], 3)).toBe(false);
    expect(containsFixedWindow([1, 0, 1, 1], 1)).toBe(false);
    expect(containsFixedWindow([1, 2, 3, 2], 3)).toBe(true);
    expect(containsFixedWindow([1, 2, 1, 2], 3)).toBe(true);
    expect(containsFixedWindow([1, 1, 1, 2], 2)).toBe(true);
    expect(containsFixedWindow([1, 2, 2, 1], 4)).toBe(true);
  });
});
