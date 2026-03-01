```typescript
function slidingWindow(nums: number[]): number {
  let left = 0;
  let result = 0;

  for (let right = 0; right < nums.length; right++) {
    // 1. expand window
    const value = nums[right];

    // update state here

    // 2. shrink while invalid
    while (/* window is invalid */) {
      const leftValue = nums[left];

      // remove from state

      left++;
    }

    // 3. update result
    result = Math.max(result, right - left + 1);
  }

  return result;
}
```
