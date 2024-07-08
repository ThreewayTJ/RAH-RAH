import getpass

# Global variable for initial balance
initial_balance = 600

# Function to perform withdrawal
def withdraw(balance, amount):
    if amount > balance:
        print("Insufficient funds!")
    else:
        balance -= amount
        print(f"Withdrawal successful. Current balance is {balance}")
    return balance

# Function to perform deposit
def deposit(balance, amount):
    balance += amount
    print(f"Deposit successful. Current balance is {balance}")
    return balance

# Function to check balance
def check_balance(balance):
    print(f"Your current balance is: {balance}")

# Function to authenticate user
def authenticate():
    username = input("Enter your username: ")
    password = getpass.getpass("Enter your password: ")

    # Replace with actual authentication logic (e.g., database check)
    if username == "admin" and password == "password":
        return True
    else:
        print("Invalid credentials. Access denied.")
        return False

# Main function to control the flow
def main():
    print("Welcome to the Banking Calculator!")
    if not authenticate():
        return

    balance = initial_balance
    while True:
        print("\nChoose an option:")
        print("1. Withdraw")
        print("2. Deposit")
        print("3. Check Balance")
        print("4. Exit")
        choice = input("Enter your choice (1/2/3/4): ")

       