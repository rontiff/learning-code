######################################################################################################

# summary
# 1. backslash
# 2. string Method with dot notation (upper, lower, title, strip, replace, find, in)
# 3. formatting string
# 4. len function
# 5. index of string

######################################################################################################

course = "python programming"

print(course)

######################################################################################################

# 1. backslash

course2 = " 1 \" 2 \' 3 \\ 4 \n 5 "

print(course2)

######################################################################################################

# 2. string Method with dot notation (upper, lower, title, strip, replace, find, in)

print(course.upper())                 #upper case

print(course.lower())                 #lower case

print(course.title())                 #capital every first letter 

print(course.strip())                 #remove white space

print(course.replace("pro","hahaha")) #replace word

print(course.find("pro"))             # return index of string

print(course.find("nothing"))         # return -1, can't found

print("pro" in course)                # return boolean

print("not appear" not in course)     # return boolean

######################################################################################################

# 3. formatting string
first="Rontiff"
last="Ha"

# method 1
full1=first+" "+last
print(full1)

# method 2
full2=f"{first} {last}"  # "f" is a expression evaluated at run time
print(full2)

######################################################################################################

# 4. len function
len(course)
print(len(course))  # 18

######################################################################################################

# 5. index of string
course[0]

print(course[0])      # index 0 word

print(course[-1])     # last word of string

print(course[0:3])    # only pyt, the "3" is not included

print(course[7:])     # get "programming" only

print(course[:6])     # from start to "python" only

print(course[:])      # original string

######################################################################################################