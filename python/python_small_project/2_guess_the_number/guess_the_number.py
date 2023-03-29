
#using random module to create a random number
#use while control flow guess a number

import random

def guess(x):
    random_number = random.randint(1,x)
    guess=0
    while guess !=random_number:
        guess = int(input(f"guess a number between 1 and {x} :"))
        if guess<1 or guess>int(x):
            print(f"Number out of range, please guess a number between 1 and {x}.")
        elif guess<random_number:
            print("sorry, guess again, too low")
        elif guess>random_number:
            print("sorry, guess again, too high.")
    print(f"Bingo! {random_number} is correct.")


x=input("Give a non-negative integer number: ")

guess(int(x))