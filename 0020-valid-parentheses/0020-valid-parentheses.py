class Solution:
    def isValid(self, s: str) -> bool:
        open_parenthesis = {"(": ")", "[": "]", "{": "}"}
        close_parenthesis = {")": "(", "]": "[", "}": "{"}
        stack = []
        
        for letter in s:
            if (letter in open_parenthesis):
                stack.append(letter)
            if (letter in close_parenthesis):
                if (len(stack) == 0 or stack.pop() != close_parenthesis[letter]):
                    return False
        if (stack):
            return False
        return True
    