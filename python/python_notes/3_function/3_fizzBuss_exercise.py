


# /3 return fizz
# /5 return buzz
# /15 return fizz buzz 
# else return num


def fizz_buzz(input):
    if input%5==0 and input%3==0:
        return "fizz buzz"
    elif input%5==0:
         return "buzz"
    elif input%3==0:
        return "fizz"
    else: 
        return input

print(fizz_buzz(3))
print(fizz_buzz(5))
print(fizz_buzz(15))
print(fizz_buzz(8))
print(fizz_buzz(7))
