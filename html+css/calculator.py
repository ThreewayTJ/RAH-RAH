def calculator(num1, num2, func):
    if func == "+":
        result = num1 + num2
    elif func == "*":
        result = num1 * num2
    else:
        result = "Invalid function"

    return result

