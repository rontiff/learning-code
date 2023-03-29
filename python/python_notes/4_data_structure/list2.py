######################################################################################################

# 1. lambda function
# 2. map function
# 3. filter function
# 4. comprehension (prefer way to map and filter list)
# 5. zip function (combine 2 list together)
# 6. stacks (LIFO, last in first out  書本 -->最上先走) 
# 7. Queues (FIFO, first in first out 排隊 -->先到先走）
# 8. Tuple  (read only list)
# 9. swapping variable
# 10.array 
# 11.sets
# 12.Dictionaries
# 13.Dictionaries comprehension
# 14.Generator expression
# 15.unpacking operator



# explanation:
# lambda function is defined and used within a single expression or statement.

    # syntax
    # (lambda arguments: expression)

# "map function" applies a given function to each element of an iterable and returns an iterator of the results.

    # syntax
    # map(function, iterable)

######################################################################################################

# 1. sorting list (lambda function)

items=[
    ("product1",50),
    ("product2",1),
    ("product3",100),
]

#         (key=lambda parameters:expression)
items.sort(key=lambda item:item[1])

print(items)

######################################################################################################

# 2. sorting list (map function)

products=[
    ("product1",5),
    ("product2",1),
    ("product3",10),
]

# create a list of 5,1,10

onlyNumber=list(map(lambda product:product[1], products))
print(onlyNumber)

######################################################################################################

# 3. sorting list (filter function)

bags=[
    ("bag1",5),
    ("bag2",1),
    ("bag3",10),
    ("bag4",5),
]

filtered=list(filter(lambda bag:bag[1]==10,bags))
print(filtered)

######################################################################################################

# 4. comprehension (prefer way to map and filter list)

dogs=[
    ("dog1",53,21,41),
    ("dog2",1,62,45),
    ("dog3",10,86,954),
    ("dog4",11,12,93),
]

# filter (only dog[2]<70)

filterColumn = [dog for dog in dogs if dog[2]<70]

print(filterColumn)


# map (select only dog[3]< 900)

fourthColumn = [dog[3] for dog in dogs if dog[3]<900]

print(fourthColumn)

######################################################################################################

# 5. zip function (combine 2 list together)

list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
zipped = list(zip(list1, list2))

# The `zipped` object is an iterator
print(zipped)   # Output: [(1, 'a'), (2, 'b'), (3, 'c')]

######################################################################################################

# 6. stacks (LIFO, last in first out  書本 -->最上先走) 

# example: website navigate
# https://translate.google.com/1/2/3

browsing_session = []
browsing_session.append(1)
browsing_session.append(2)

print(browsing_session)

previous = browsing_session.pop()

print(browsing_session)

######################################################################################################

# 7. Queues (FIFO, first in first out 排隊 -->先到先走）

from collections import deque

# instead of empty object, wrap it to a deque object
queue = deque([])

queue.append(1)
queue.append(2)
queue.append(3)

# function of deque
queue.popleft()

print(queue)

######################################################################################################

# 8. Tuple  (read only list, list don't want edit)

point=(1,2,3)

point[0:3]

# unpack tuple
x,y,z=point

if 10 in point:
    print("exists")

######################################################################################################

# 9. swapping variable

# method 1
x=10
y=11

z=x
x=y
y=z
print("x:"+str(x))
print("y:"+str(y))

######################################################

# method 2

a=10
b=11

#unpacking "a" and "b", and define a tuple
a,b=b,a

print("a:"+str(a))
print("b:"+str(b))

######################################################################################################

# 10.array 

# due with large number(example:10000 items)
# mainly use list and tuple by default

from array import array


# typecode of python: https://docs.python.org/3/library/array.html
arrayNumber = array("i", [1,2,3])

# the object in this array are typed. every object is integer

######################################################################################################

# 10.sets function

# set : collection with no duplicate

number = [1, 2, 3, 3, 4, 5, 5]

setOne = set(number)
print(setOne)            # {1, 2, 3, 4, 5}

# function of set
setTwo = {1, 6}
print(setOne | setTwo)   # included all the items 
print(setOne & setTwo)   # intersection of setOne and setTwo
print(setOne - setTwo)   # the remaining of setOne - setTwo
print(setOne ^ setTwo)   # not commonly have

#can't access in index 

######################################################################################################

# 12.Dictionaries

# difference between set and dictionaries

# set         : only value
# dictionaries: ave key value

# key only use immutable types.(commonly is string or number)
# example:string is key, number is value
point={"x":1,"y":2}

usingDictFunc = dict(x=1,y=2)

print(usingDictFunc)

# edit value in dictionaries
usingDictFunc["x"]=3
usingDictFunc["z"]=4

print(usingDictFunc)

######################################################################################################

# 13.Dictionaries comprehension

# [expression for item in items]


value = {x: x*2 for x in range(5)}

print(value)

# comprehensions can use in list, set, dictionaries

######################################################################################################

# 14.Generator expression

#situation why dealing with a really large data set. use generator expression.

from sys import getsizeof

# generator size
value = (x*2 for x in range(100000))
print("gen:",getsizeof(value))        #size =112 

# list size
value = [x*2 for x in range(100000)] 
print("gen:",getsizeof(value))        #size =800984

######################################################################################################


