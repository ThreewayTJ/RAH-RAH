def add(num1, num2):
    return num1 + num2

def calculate():
    ans = input("What do you want to do? (add, sub, mul, div): ")

    if ans == "add":
        num1 = float(input("Enter the first number: "))
        num2 = float(input("Enter the second number: "))
        result = add(num1, num2)
        print(f"Result of {num1} + {num2} = {result}")
    elif ans == "sub":
        num1 = float(input("Enter the first number: "))
        num2 = float(input("Enter the second number: "))
        result = num1 - num2
        print(f"Result of {num1} - {num2} = {result}")
    elif ans == "mul":
        num1 = float(input("Enter the first number: "))
        num2 = float(input("Enter the second number: "))
        result = num1 * num2
        print(f"Result of {num1} * {num2} = {result}")
    elif ans == "div":
        num1 = float(input("Enter the first number: "))
        num2 = float(input("Enter the second number: "))
        if num2 != 0:
            result = num1 / num2
            print(f"Result of {num1} / {num2} = {result}")
        else:
            print("Error: Division by zero!")
    else:
        print("Invalid operation specified. Please choose add, sub, mul, or div.")

