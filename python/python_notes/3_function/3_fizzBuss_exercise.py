
# /3 return fizz
# /5 return buzz
# /15 return fizz buzz 
# else return num

def fizz_buzz(num):
    if num%5==0 and num%3==0:
        return "fizz buzz"
    elif num%5==0:
         return "buzz"
    elif num%3==0:
        return "fizz"
    else: 
        return num


x=input("Give a number: ")

print(fizz_buzz(int(x)))