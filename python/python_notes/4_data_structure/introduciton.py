######################################################################################################

# summary

# 4 built-in data types in Python used to store collections of data,all with different qualities and usage. 


######################################################################################################

# 1. List (可變)

fruits = ['apple', 'banana', 'orange']
numbers = [1, 2, 3, 4, 5]

# Lists: Lists are used to store an ordered collection of items. 
# They are mutable(可變的), which means you can add, remove, and modify elements after the list is created. 
# Lists are created using square brackets [].

############################################

# 2. Tuple (不變)

dimensions = (10, 20, 30)
colors = ('red', 'green', 'blue')

# Tuples: Tuples are similar to lists, but immutable(不變的), which means you cannot modify them after they are created. 
# They are useful when you want to store a collection of items that should not be changed. 
# Tuples are created using parentheses ().

############################################

# 3. Set

my_set = {1, 2, 3, 4, 5}
unique_letters = set('abracadabra')

# Sets: Sets are used to store an unordered collection of unique items. 
# They are useful when you want to remove duplicates from a collection or perform set operations like union, intersection, and difference. 
# Sets are created using curly braces {}.

############################################

# 4. Dictionary

student = {'name': 'Alice', 'age': 20, 'major': 'Computer Science'}
fruit_prices = {'apple': 0.99, 'banana': 0.55, 'orange': 0.75}

# Dictionaries: Dictionaries are used to store a collection of key-value pairs. 
# They are useful when you want to store data in a way that can be easily looked up using a key. 
# Dictionaries are created using curly braces {} with key-value pairs separated by colons (:).

######################################################################################################