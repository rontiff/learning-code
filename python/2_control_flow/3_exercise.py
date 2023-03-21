

# #output
# 2
# 4
# 6
# 8
# we have x even numbers


even_num=0

for number in range(1,10):
    if number%2==0:
        print(number)
        even_num+=1

else:
    print(f"we have {even_num} even numbers")