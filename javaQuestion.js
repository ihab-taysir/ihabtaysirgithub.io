function twoSum(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (numIndices[complement] !== undefined) {
            return [numIndices[complement], i];
        }

        numIndices[currentNum] = i;
    }

    return [];
}

// usage:
const nums = [2, 7, 15, 15];
const target = 30;
const result = twoSum(nums, target);
console.log(result);
