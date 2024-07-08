def chat_bot():
    print("Hi there! How can I help you today?")
    response = input("Enter your query: ")

    if response == "calculator":
        func = input("What operation do you want to perform? (add, sub, div, **): ")

        if func in ["add", "sub", "div", "**"]:
            num1 = float(input("Enter the first number: "))  # Using float for division and exponentiation
            num2 = float(input("Enter the second number: "))  # Using float for division and exponentiation

            if func == "add":
                result = num1 + num2
            elif func == "sub":
                result = num1 - num2
            elif func == "div":
                if num2 != 0:
                    result = num1 / num2
                else:
                    result = "Error: Division by zero!"
            elif func == "**":
                result = num1 ** num2

            print(f"Result of {num1} {func} {num2} = {result}")
        else:
            print("Invalid operation specified. Please choose add, sub, div, or **.")
    else:
        print("I'm sorry, I can only assist with the calculator. Please ask about 'calculator'.")

# Calling the chat_bot function to start interaction
chat_bot()

      