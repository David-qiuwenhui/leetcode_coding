/**
 * 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
 *
 * @param {number[]} nums 整数数组
 * @param {number} target 目标值
 * @returns {number[]} 返回两个数字的索引
 */
function twoSum(nums, target) {
  // 使用 Map 存储已遍历过的数字及其索引
  const numMap = new Map();

  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 计算当前数字与目标值的差值
    const complement = target - nums[i];

    // 如果差值存在于 map 中，则找到了答案
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    // 将当前数字和索引存入 map
    numMap.set(nums[i], i);
  }

  // 根据题目假设，每种输入只会对应一个答案，所以这里不会执行到
  throw new Error("No two sum solution");
}

// 导出函数供测试使用
export { twoSum };
