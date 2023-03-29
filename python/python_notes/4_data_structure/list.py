######################################################################################################

# summary
# 1. List
# 2. copy list
# 3. Accessing list
# 4. list unpacking
# 5. looping over list + unpack
# 6. add and remove item in list
# 7. Finding item in list
# 8. sorting list



######################################################################################################

# 1. List

# Lists: Lists are used to store an ordered collection of items. 
# They are mutable(可變的), which means you can add, remove, and modify elements after the list is created. 
# string, boolean, list all can combine in one list.   
# Lists are created using square brackets [].



letters=["a","b","c"]    # string list                        # output = ['a', 'b', 'c']

matrix=[[0,1],[2.3]]     # matrix list                        # output = [[0, 1], [2.3]]

zero=[0]*5               # number list                        # output = [0, 0, 0, 0, 0]

combined = zero+letters  # combine list                       # output = [0, 0, 0, 0, 0, 'a', 'b', 'c']

number=list(range(20))   # create list with "list" function   # output =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

######################################################################################################

# 2. copy list

number_original = [1,2,3]

number_copy = number_original.copy()

######################################################################################################

# 3. Accessing list

letters_access=["a","b","c","d","e","f","g","h","i"]   

# string list access item

letters_access[0]     # first list item

letters_access[-1]    # last list item

letters_access[0:3]   # first 3 item 0,1,2. not including 3 

letters_access[7:]    # item 7 to end

letters_access[:6]    # first item to item 6

letters_access[:]     # copy of letters 

# number list access item

numbers_access=list(range(10))

numbers_access        # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers_access[1:8:2] # list skip      # output = [1, 3, 5, 7]

numbers_access[::3]   # list skip      # output = [0, 3, 6, 9]

numbers_access[::-1]  # reverse list   # output = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

######################################################################################################

# 4. list unpacking

#get individual item in the list, and assign to different variable
# meaning: unpack the list to different variable

big = [6,7,8,9]

six, steven, eight, nine = big

print(six)     # output: 6 
print(nine)    # output: 9

############################################

small = [1,2,3,4]

one, two, *others =small

print(*others) # output: 3,4
print(one)     # output: 1
print(two)     # output: 2

######################################################################################################

# 5. looping over list + unpack

letters_loop_over=["a","b","c","d","e","f","g","h","i"]   

# loop every items
for letter in letters_loop_over:
    print(letter)

# loop every items with index

    #build in function --> enumerate --> output: (index, item)

############################################

# not good, didn't unpack

for letter in enumerate(letters_loop_over):
    print(letter)              #create a tuples 
    print(letter[0],letter[1]) #access the tuples 

############################################

#better, use unpack list in loop.

for index, letter in enumerate(letters_loop_over):
    print(index, letter)      #use unpacked variable

######################################################################################################

# 6. add and remove item in list

letters_add_item=["a","b","c","d","e","f","g","h","i"]   

############################################

# Add item in list

letters_add_item.append("j")        # append=附加

letters_add_item.insert(0,"start")  # insert=插入

############################################

# Delete item in list

letters_add_item.pop()              # pop    = default delete last item

letters_add_item.pop(0)             # pop    = delete first item

letters_add_item.remove("a")        # remove = delete specific item. argument required.

letters_add_item.clear()            # clear  = clear a range of item

del letters_add_item[0:4]           # del    = delete a range of item

######################################################################################################

# 7. Finding item in list

letters_find_item=["a","b","c"]   

letters_find_item.index("c")        # output: 2

#letters_find_item.index("d")       # ValueError: 'd' is not in list

letters_find_item.count("a")        # output: 1 (occur in the list)

letters_find_item.count("d")        # output: 0 (not occur in the list)   

if "d" in letters_find_item:        # if statement search
    print("d")

######################################################################################################

# 8. sorting list

# "sorted" create a new list
# "sort" edit the original list
number_sort = [1,9,2,8,3,7,4,6,5]

#sorted
new_sorted_list = sorted(number_sort)  # "sorted" create a new list
print(new_sorted_list)

#sort
number_sort.sort()                     # "sort" edit the original list
print(number_sort)


#reverse sorted:
reverse=sorted(number_sort,reverse=True)
print(reverse)

######################################################################################################

