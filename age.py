def age_checker():
    try:
        age = int(input("Please enter your age: "))
        if age <= 11:
            print("You are a child.")
        elif age <= 19:
            print("You are a teenager.")
        else:
            print("You are an adult.")
    except ValueError:
        print("Invalid input. Please enter a valid age as a number.")

#

