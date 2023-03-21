######################################################################################################

# summary
# 1. loop
# 2. for in loop
# 3. for else loop
# 4. nested loop ( a loop inside of another loop)
# 5. Iterables
# 6. while loop
# 7. infinite loop

######################################################################################################
# 1. loop

# a loop is a sequence of instruction s that is continually repeated until a certain condition is reached.

######################################################################################################

# 2. for in loop

for number in range(1,10,2):
    print("Attempt", number+1)

    # "range" is a function. if don't have a list to work with
    # range( start , end , step )
    # 3 is not included. meaning only 0,1,2

######################################################################################################

# 3. for else 

successful=False

for num in range(3):
    print("attempt")
    if successful:
        print("Successful")
        break
else: 
    print("attempted 3 times, no break of the loop, Failed.")

# the else statement only will be execute if the loop never break.

######################################################################################################

# 4. nested loop ( a loop inside of another loop)

for x in range(5):           #outer loop
    for y in range(3):       #inner loop
        print(f"({x},{y})")

# 15 output. 

######################################################################################################

# 5. Iterables

# what can be loop
# 1.range
# 2.string
# 3.list
# 4.object

######################################################################################################

# 6. while loop

# The while loop is used to repeat a section of code an unknown number of times until a specific condition is met.

temperature=100

while temperature>0:
    print("tem", temperature)
    temperature-=1

# example
command=""

while command.lower()!="quit":
    command =input("==>")
    print("ECHO:", command)

######################################################################################################

while True:
    command =input("==>:")
    print("ECHO:", command)
    if command.lower()=="quit":
        break

#if no break, it will become infinite.

######################################################################################################