/**
 * 两数之和
 * https://leetcode.cn/problems/two-sum/submissions/674566140/
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
 *
 * @param {number[]} nums 整数数组
 * @param {number} target 目标值
 * @returns {number[]} 返回两个数字的索引
 */
function twoSum(nums, target) {
  const numMap = new Map();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    const needValue = target - element;

    if (numMap.has(needValue)) {
      return [numMap.get(needValue), index];
    }

    numMap.set(element, index);
  }

  return [];
}

// 导出函数供测试使用
export { twoSum };
