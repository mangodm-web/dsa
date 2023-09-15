class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        result = 0
        nums_set = set(nums)

        for num in nums:
            if num - 1 not in nums_set:
                pointer = num
                consecutive_length = 0

                while (pointer in nums_set):
                    if (pointer in nums_set):
                        pointer = pointer + 1 
                        consecutive_length = consecutive_length + 1 

                if (consecutive_length > result):
                    result = consecutive_length

        return result
