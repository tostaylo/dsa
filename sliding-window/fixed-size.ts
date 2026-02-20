/**
 ** Problem: Given an array return true if there are two elements
 ** within a window of size k that are equal.
 **/

// set = [2, 3, 1]
// l = 1
// r = 3
// k = 3
// arr = [1, 2, 3, 1]
//           l
//                 r

export function containsFixedWindow(arr: number[], k: number): boolean {
  const windowSet = new Set<number>();
  let left = 0;

  // right is hunter
  // left is catcher - tightens the net
  for (let right = 0; right < arr.length; right++) {
    // If window exceeds size k, remove the leftmost element
    if (right - left + 1 > k) {
      windowSet.delete(arr[left] as number);
      left++;
    }

    // If we already have this element in the current window, we found a duplicate
    if (windowSet.has(arr[right] as number)) {
      return true;
    }

    // Add the new element
    windowSet.add(arr[right] as number);
  }

  return false;
}

/**
 *
 * The idea here is to subtract the left of the window, add the right, determine max, repeat
 */

//  const nums = [2, 1, 5, 1, 3, 2];
//   const k = 3;
// [2, 1, 5, 1, 3, 2]
//           r

// r = 3
// max = 8
// window = 7
export function maxSubarraySum(nums: number[], k: number): number {
  let max = -Infinity;
  let window = 0;

  for (let right = 0; right < nums.length; right++) {
    window += nums[right] as number;
    if (right >= k - 1) {
      max = Math.max(max, window);
      const left = right - k + 1;
      window = window - (nums[left] as number);
    }
  }
  return max;
}
