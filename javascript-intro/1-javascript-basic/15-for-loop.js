
///////////////////////////////////////////////////////////////////////

// While loop, 3 elements

x=0                                  // #1: x=0
array=["alex","gordon","bobby"]

while(x<array.length){               //#2: x<count time / length
    console.log(array[x])
    x+=1                             //#3: x+=1 
}

//for loop is the short cut for while loop
// Apply 3 elements in the same 
for(x=0;x<3;x+=1){
    console.log(array[x])
}


///////////////////////////////////////////////////////////////////////
//for-of loop : specifically for Array
//name 係自己定義

for (name of array){
    console.log(name)
}

// disadvantage: dont know length of index

///////////////////////////////////////////////////////////////////////

//for-in loop : specifically for Object

const counts={
    a:2,
    b:1,
    c:2,
    d:2,
    e:1,
}

//count 係自己定出黎

for (const count in counts ){
    console.log(count)
}

///////////////////////////////////////////////////////////////////////


