class Solution:
    def isValid(self, s: str) -> bool:
        pairs = {"(": ")", "[": "]", "{": "}"}
        stack = []
        
        for parenthesis in s:
            if (parenthesis in pairs):
                stack.append(parenthesis)
            elif (len(stack) == 0 or parenthesis != pairs[stack.pop()]):
                return False

        return len(stack) == 0
