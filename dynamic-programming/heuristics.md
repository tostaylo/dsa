## Characteristics of Dynamic Programming

- Smaller problems can be used to solve larger versions
- Smaller solutions are reusable
- Tree problems (often recursion?) Diagram the tree to see what nodes repeat themselves

## Approaches

- Figure out the sub problems
- Workout a tree(recursive solution)
- Add memoization

## Template

```typescript
if args in not in memo && if not base case
    for each child
       recurse
else
  add result to memo

return memo(args)
```

## Top Down

## Bottom Up

tabulation

## Runtime: O( ...args multiplied together)

## Space: O(...args multipled together mulitplied by output size)

https://replit.com/@Jeffrey-Jackson/DynamicProgramming#worksheet.txt
https://leetcode.com/problems/regular-expression-matching/submissions/1931272667/?envType=problem-list-v2&envId=dynamic-programming
