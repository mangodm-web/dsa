class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        result = 0
        min_purchase = prices[0]
        
        for i in range(1, len(prices)):
            result = max(result, prices[i] - min_purchase)
            min_purchase = min(min_purchase, prices[i])
        
        return result
    