# Find median sorted arrays

## Problem Statement

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

## My solution

```javascript
const findMedianSortedArrays = function (nums1, nums2) {
    const sortedArray = [...nums1, ...nums2].sort((a, b) => a - b)
    const isPair = sortedArray.length % 2 === 0
    const mediumIndex = sortedArray.length / 2 | 0
    return isPair
        ? (sortedArray[mediumIndex - 1] + sortedArray[mediumIndex]) / 2
        : sortedArray[mediumIndex]
};
```
## Explain

I just merge the two arrays and sort them, then I calculate the median based on the length of the array.

## Time complexity

```text
O(n log n)
```