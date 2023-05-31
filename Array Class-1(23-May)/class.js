// Q1. Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

function findMinMax (arr, n) {
    minmax = new Array();
    var i;
    var min;
    var max;

    // if only one element present
    if( n == 1) {
        minmax.max = arr[0];
        minmax.min = arr[0];
        return minmax;
    }

    // if more than one element present
    if( arr[0] > arr[1]) {
        minmax.max = arr[0];
        minmax.min = arr[1];
    } else {
        minmax.max = arr[1];
        minmax.min = arr[0];
    }

    for (let i = 2; i < n; i++) {
        if(arr[i] > minmax.max) {
            minmax.max = arr[i]
        } else if (arr[i] > minmax.min) {
            minmax.min = arr[i]
        }
        
    }

    return minmax
    // console.log(minmax);
}

// findMinMax([12,3,65,89], 4)


//  **Q2.** You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = function(arr) {
    let max_Profit  = 0;
    let minPrice = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < minPrice) {
            minPrice = arr[i]
        } else if (arr[i] - minPrice > max_Profit)  {
            max_Profit = arr[i] - minPrice
        }       
    }
    return max_Profit;
    // console.log(max_Profit);
}
// maxProfit([7,1,5,3,6,4])

//  **Q3.** Given an integer array nums, find a subarray that has the largest product, and return the product.The test cases are generated so that the answer will fit in a 32-bit integer.

const maxProduct = function(arr) {
    let currMax = arr[0];
    let currMin = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const tempMax = currMax;
        
        currMax = Math.max(arr[i], arr[i]*currMax, arr[i]*currMin);
        currMin = Math.min(arr[i], arr[i]*currMin, arr[i]*tempMax );

        result = Math.max(result, currMax);
    }
    return result;
    // console.log(result);
}

// maxProduct([2,3,-2])
// maxProduct([3,0,-1,-4,0])



// Q4. Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.Notice that the solution set must not contain duplicate triplets.

const threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let triplets = [];

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) break ;

        if(i === 0 || nums[i] !== nums[i-1]){
            let left = i + 1;
            let right = nums.length - 1;

            while(left < right) {
                let sum = nums[1] + nums[left] + nums[right];

                if(sum < 0) left++;
                else if (sum > 0) right--;
                else {
                    triplets.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    
                    while(left < right && nums[left] === nums[left-1]) left++;
                }
            }
        }
        
    }
    return triplets;
    // console.log(triplets);
}
// threeSum([-1, 0, 1, 2, -1, 4])

// Q5. Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

const findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    // console.log(nums);
    return nums[k-1]
    // console.log(nums[k-1]);
}

findKthLargest([23, 45,63, 1, 89, 44], 2);

