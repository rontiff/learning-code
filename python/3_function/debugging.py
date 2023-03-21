def multiply(*numbers):
    total =1 
    for number in numbers:
        total*=number
    return total
    
print("Start")
print(multiply(1,2,3))

#debugging step: 

#step 1: open debugging panel

#step 2: select python debugging configuration 

#step 3: "F9" create a break point (put the curser to the code)

#step 4: "F5" run the application up to that point

#step 5: "F10" execute one statement at a time. 

#step 6: "F11" step in to the function