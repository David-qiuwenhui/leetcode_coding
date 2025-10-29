import { describe, it, expect } from "vitest";
import { twoSum } from "./index.js";

describe("twoSum", () => {
  it("应该返回数组中和为目标值的两个数字的索引", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);

    expect(result).toEqual([0, 1]);
  });

  // 添加示例2的测试用例
  it("应该处理不同的数字组合", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);

    expect(result).toEqual([1, 2]);
  });

  it("应该处理负数", () => {
    const nums = [3, -1, 2, -2];
    const target = 1;
    const result = twoSum(nums, target);

    expect(result).toEqual([1, 2]);
  });

  it("应该处理重复数字", () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);

    expect(result).toEqual([0, 1]);
  });
});
