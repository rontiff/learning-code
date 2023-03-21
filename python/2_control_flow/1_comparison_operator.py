######################################################################################################

# summary
# 1. comparison operator
# 2. if else statement
# 3. ternary operator
# 4. logical operator (and, or, not)
# 5. Chaining comparison operator

######################################################################################################

comparison_1 = 10 > 3
comparison_2 = 10 >= 3
comparison_3 = 10 < 3
comparison_4 = 10 <= 3
comparison_5 = 10 == 3  # equal
comparison_6 = 10 != 3  # not equal

print(comparison_1)
print(comparison_2)
print(comparison_3)
print(comparison_4)
print(comparison_5)
print(comparison_6)

######################################################################################################

# 2. if else statement

user_tem_input = 31

if user_tem_input > 30:
    print("it's warm, drink water")
elif user_tem_input <= 30 and user_tem_input >= 15:
    print("it's good weather, go outside.")
else:
    print("it is cold, wear clothes.")


######################################################################################################

# 3. ternary operator

# assign value to the variable in if statement
age = 13

# method 1 :ternary operator
message = "eligible" if age >= 18 else "Not Eligible"

print(message)

# method 2 :same as if statement
if age > 20:
    message = "eligible"
else:
    message = "not eligible"
print(message)

######################################################################################################

# 4. logical operator (and, or, not)

high_income = True
good_credit = True
is_student = False

if (high_income and good_credit) and not is_student:
    print("eligible")
else:
    print("not eligible")

# Python is Short circuit. example: if high_income is False, the function will stop.

######################################################################################################

# 5. Chaining comparison operator

x = 2
y = 3

1 < x < y < 4  # True

(1 < x) and (x < y) and (y < 4)  # True

# example
temperature = 22

if 20 <= temperature < 30:
    print("the temperature is between 20 to 30 degree.")

######################################################################################################