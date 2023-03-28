######################################################################################################

# #output
# 2
# 4
# 6
# 8
# we have x even numbers

######################################################################################################

# Method 1

even_num=0

for number in range(1,10):
    if number%2==0:
        print(number)
        even_num+=1

else:
    print(f"we have {even_num} even numbers")

######################################################################################################

# method 2

x=input("number of even number:")
numbers=range(1,int(x)+1)

count=0

for number in numbers:
    if number%2==0:
        count+=1
        print(number)

else:
    print(f"we have {count} even numbers.")