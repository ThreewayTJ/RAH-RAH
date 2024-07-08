def grades():
    History = int(input("Enter your grade in History: "))
    English = int(input("Enter your grade in English: "))
    Math = int(input("Enter your grade in Math: "))
    Spanish = int(input("Enter your grade in Spanish: "))
    
  
    overall_grade = (History + English + Math + Spanish) / 4
    
    print(f"Your grades - History: {History}, English: {English}, Math: {Math}, Spanish: {Spanish}")
    print(f"Your average grade is: {overall_grade}")
    
    
    if overall_grade >= 70:
        print("Congratulations! You are passing school.")
    else:
        if History >= 70:
            print("You are passing History.")
        if English >= 70:
            print("You are passing English.")

grades()
