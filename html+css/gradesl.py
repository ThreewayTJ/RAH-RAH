def check_grade(score):
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 70:
        return 'C'
    elif score >= 60:
        return 'D'
    else:
        return 'F'

# Example usage:
scores = [88, 95, 72, 60, 50]
for score in scores:
    grade = check_grade(score)
    print(f"For a score of {score}, the grade is {grade}")
