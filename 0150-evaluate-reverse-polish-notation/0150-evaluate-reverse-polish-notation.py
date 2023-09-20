class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        operands = {"+", "-", "*", "/"}
        temp_stack = []

        for token in tokens:
            if token in operands:
                operand1 = temp_stack.pop()
                operand2 = temp_stack.pop()
                temp_stack += [str(int(eval(operand2 + token + operand1)))]    
            else:
                temp_stack += [token]
        return int(float(temp_stack[0]))
        