/*
Q1. Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

Example 1:
Input: nums = [1,4,3,2]
Output: 4
*/

const pairSum = function(nums) {
    nums.sort((a , b) => a - b );

    let maxSum = 0;

    for (let i = 0; i < nums.length;  i+=2) {

         maxSum = maxSum + Math.min(nums[i], nums[i + 1])
        
    }

    return maxSum;
    // console.log(maxSum);
}

// pairSum([1, 4, 3, 2])

/*
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

Example 1:
Input: candyType = [1,1,2,2,3,3]
Output: 3

*/

const maxCandy = function(candies) {
    const distinctCandy = new Set();

    for (let i = 0; i < candies.length; i++) {
        distinctCandy.add([candies[i]])
        
    }
    const maxCandyEat = Math.min(distinctCandy.size, candies.length/2);
    return maxCandyEat;
    // console.log(maxCandyEat);
}

// maxCandy([1, 1, 2, 2, 3, 3])

/*
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

Explanation: The longest harmonious subsequence is [3,2,2,2,3].

*/

const findHarmonious = function(nums) {
    let numCounts = new Map();
  let lengthOfSubsequence = 0;

  
  for (let num of nums) {
    if (numCounts.has(num)) {
      numCounts.set(num, numCounts.get(num) + 1);
    } else {
      numCounts.set(num, 1);
    }
  }

  for (let [num, count] of numCounts) {
    if (numCounts.has(num + 1)) {
      let currentSubsequenceLength = count + numCounts.get(num + 1);
      if (currentSubsequenceLength > lengthOfSubsequence) {
        lengthOfSubsequence = currentSubsequenceLength;
      }
    }
  }

return lengthOfSubsequence;
// console.log(lengthOfSubsequence);

}

// findHarmonious([1,3,2,2,5,2,3,7])

/*
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true


*/

function findSpaceForFlowers(arr, n) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i] === 0 &&
            (i === 0 || arr[i - 1] === 0) &&
            (i === arr.length - 1 || arr[i + 1] === 0)
          ) {
            arr[i] = 1;  
            count++;  
          }
      
          if (count >= n) {
            return true; 
          }
        
    }
    
    return false;  
  }
  

  /*
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6

  */

const findMaxProduct = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const n = nums.length;
    
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    
    const product2 = nums[0] * nums[1] * nums[n - 1];
    
    return Math.max(product1, product2);
}

/*
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Explanation: 9 exists in nums and its index is 4

*/

const findTargetIndex = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; 
      } else if (nums[mid] < target) {
        left = mid + 1; 
      } else {
        right = mid - 1; 
      }
    }
  
    return -1; // Target not found
  }
  
/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true

*/

const isMonotonic = function(arr) {
    const n = arr.length;
    let increase = true;
    let decrease = true;
  
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        increase = false;
      }
  
      if (arr[i] < arr[i + 1]) {
        decrease = false;
      }
    }
  
    return increase || decrease;
  }
  
  