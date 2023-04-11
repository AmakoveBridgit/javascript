//1. Write a function that takes in a string and returns it when reversed
//let food = “eating”
  let food="eating"
//  console.log(food.reverse())
 console.log(food.slice(-1,-6))

// //Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//'Target = 23

//mergeSort
function divArr(num){
    if(num.length<=1){
        return num
    }
    let middle=Math.floor(num.length/2);
    let left=num.slice(0,middle);
    let right=num.slice(middle);
    return sortArr(divArr(left),divArr(right))
}
function sortArr(left,right){
    let newArr=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            newArr.push(left.shift())
        }
        else{
            newArr.push(right.shift())
        }
        
    }
    return[...newArr,...left,...right]
}
let num=[2,8,0,23,5,45,76]
console.log(divArr(num))

// binary search
function search(num,target){
    let left=0;
    let right=num.length-1
    let middle=Math.floor((left+right/2))
    while(left<right){
        if(num[middle]===target){
            return middle  
        }  
  else if(num[middle]<target){
        left=middle+1
  }
      else{
        right=middle-1
      }  

    }
return null
}
let sortNum=[0,2,5,8,23,76]
let target=23
console.log(search(sortNum))

// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

let years=[2000,2001,2002,2003]
if(years<366){
    console.log("Is a leap year")
}
else{
    console.log("Is not a leap year")
}



//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for(let i=0;i<100)



//5. Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]






//6. Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]

let nums=["10","24","45","56","67"]
for(let i=0; )
