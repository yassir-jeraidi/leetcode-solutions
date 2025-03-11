const nums1 = [2,2,4,4]
const nums2 = [2,2,2,4,4]

const findMedianSortedArrays = function (nums1, nums2) {
    const sortedArray = [...nums1, ...nums2].sort((a, b) => a - b)
    const isPair = sortedArray.length % 2 === 0
    const mediumIndex = sortedArray.length / 2 | 0
    return isPair
        ? (sortedArray[mediumIndex - 1] + sortedArray[mediumIndex]) / 2
        : sortedArray[mediumIndex]
};