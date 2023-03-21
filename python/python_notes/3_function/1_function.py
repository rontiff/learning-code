######################################################################################################

# summary
# 1. function structure
# 2. argument
# 3. type of function (perform a task ||  return a value )
# 4. keyword argument
# 5. default argument
# 6. a lot of argument 
# 7. a lot of argument (dictionary)
# 8. scope

######################################################################################################

# 1. function structure

def greet():
    print("hi there")
    print("welcome.")

#call the function
greet()

######################################################################################################

# 2. argument

def greetName(firstName,lastName):

    print(f"hi {firstName} {lastName}, nice to meet you.")

greetName("sara","chan")

######################################################################################################

# 3. type of function

#1: perform a task 

def greetName(firstName,lastName):

    print(f"hi {firstName} {lastName}, nice to meet you.")

greetName("sara","chan")

#2: return a value (re-usable)

def get_greeting(name):
    return f"hi {name}, nice to meet you."
message=get_greeting("sara")

print(message)

######################################################################################################

# 4. keyword argument

# Keyword arguments are values that, when passed into a function, are identifiable by specific parameter names.

def increment(number, by):
    return number + by

print(increment(number=1,by=2))

######################################################################################################

# 5. default argument

def increment(number, by=1):
    return number + by

print(increment(number=10))

# Note that the default argument need to put at the end. 

# Wong Example:  def increment(number, by=1, sum):

######################################################################################################

# 6. a lot of argument 

# the is a collection of argument, using "*" to pre-fix it. 

def multiply(*numbers):
    total=1
    for number in numbers:
        total*=number
    return total

print(multiply(1,2,3,4,5))

######################################################################################################

# 7. a lot of argument (dictionary)

# when using "**" in the argument, can pass multiple key value pair. Python will convert it to a dictionary (aka: object)

def save_user(**user):
    print(user)

save_user(id=1,name="john",age=20)


# Access value of the dictionary

def save_user(**user):
    print(user["name"])

save_user(id=1,name="john",age=20)

######################################################################################################

# 8. scope
# Scope meaning the region of the code where the variable is defined. 

def sayHi():
    sentence="message is local variable of \"greet\" function."

# print(sentence)

######################################################################################################
