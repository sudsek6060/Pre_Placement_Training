// 💡 Q1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.

/*
Example:
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
*/

const result = function(nums, k) {
    let outPut = [];
    for (let i = 0; i < nums.length; i++) {
        // if target is an element of array
        if(nums[i] === k) {
            outPut.push([nums[i]])
        }
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === k){
                outPut.push([nums[i], nums[j]]);
                
            }

        }
        
    }
    return outPut;
    // console.log(outPut);
}

// result([2,9,22,11], 11)

/*
💡 Q2. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

Example :
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_*,_*]

Explanation: Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)

*/

const removeEle = function (nums, val) {
    let k = 0; //k = no of elements not equal to val
    for (let i = 0; i < nums.length; i++) {
            if(nums[i] !== val){
                nums[k] = nums[i];
                k++;
            }
    }
    return k;
    // console.log(k);
}
// removeEle([3,2,2,2,3], 3)

/*
💡 Q3. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5

Output: 2

*/

const findIndex = function(nums, target) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if(nums[j] === target){
            i=j;
        }else if (!nums.includes(target)){
            if(nums[0] > target ){
                i = 0;
            }
            if(nums[j] < target && nums[j + 1] > target){
                i = j+1;
            }
        }
    }
    return i;
    // console.log(i);
}
// findIndex([1,2,3,5,7,10], 9)

/*
💡 Q4. You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]

Explanation: The array represents the integer 123.

Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
 */

const nextInteger = function(nums){

    const num = Number(nums.join("")); //converting array to integer
    const nextNum = num + 1;

    const nextNumStr = String(nextNum);

    const newArr = nextNumStr.split('').map((i) => Number(i))
    // return newArr;
    console.log(newArr);

}
// nextInteger([1,2,3])

// Second Approach
const nextIntegerr = function(nums) {
    const n = nums.length;
    const k = nums[n-1] + 1;

    nums.splice(n-1, 1, k);

    return nums;
    // console.log(nums);
}

// nextIntegerr([1,2,3])

/*
💡 Q5. You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

*/

const mergeArr = function(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);

    let j = 0;
    let k = 0;

    for (let i = 0; i < m+n; i++) {
        if(k >= n || (j < m && nums1Copy[j] < nums2[k])) {
            nums1[i] == nums1Copy[j];
            j++
        } else {
            nums1[i] = nums2[k];
            k++;
        }
        
    }
}

/*
💡 Q6. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]
Output: true
*/

const repeatElement = function(nums) {
    const seeet = new Set();

    for (let i = 0; i < nums.length; i++) {
        
        if(seeet.has(nums[i])){
            return true;
            // console.log(true);
        }
        seeet.add(nums[i])
        
    }    

    return false;
    // console.log(false);
}

// repeatElement([1,2,3,1])
// repeatElement([1,2,3,4])

/*
💡 Q7. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

*/

const moveZeros = function(nums) {
    let nonZeroElements = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[nonZeroElements] = nums[i];
            nonZeroElements++;
        }
        
    }
    for (let i = nonZeroElements; i < nums.length; i++) {
        nums[i] = 0;
        
    }

    return nums;
    // console.log(nums);
}

// moveZeros([1,3,5,0,8,0,9])

/*
💡 Q8. You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]

*/

const findErrNum = function(nums) {
    let frequency = {}
    let duplicateNum, missingNum;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(frequency[num]){
            duplicateNum = num;
        } else {
            frequency[num] = 1
        }
        
    }
    for (let i = 1; i <= nums.length; i++) {
        if(!frequency[i]){
            missingNum = i;
            break;
        }
        
    }
    return [duplicateNum, missingNum];
    // console.log([duplicateNum, missingNum]);
}
// findErrNum([1,2,2,4])