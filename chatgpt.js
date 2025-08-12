/*   
   function evenOdd(num){
        if(num%2==0){
            console.log("even")
        }
        else {
            console.log("odd")
        }
    }
    evenOdd(10)

*/


/*
    function StringReverse(str){
        let reversed=""
        for(let i=str.length-1;i>=0;i--){
            reversed+=str[i]
        }
        return reversed
    }
    console.log(StringReverse("Hello"))
    
*/

/*
    function sumOfarray(arr){
            let sum=0
            for(i=0;i<arr.length;i++){
                sum=sum+arr[i]
            }
            return sum
    }
    console.log(sumOfarray([1,2,3,4]))

*/


/*
    function LargestNoArray(arry){
        let largest=arry[0]
        for(let i=0;i<arry.length;i++){
            if(arry[i]>largest){
                largest=arry[i]
            }
        }
        return largest
    }
    console.log(LargestNoArray([111,708,10,32]))

*/

/*
    function countVovels(a){
        count=0
        for( let i=0;i<a.length;i++){
            if(a[i]=="a"||a[i]=="e"||a[i]=="i"||a[i]=="o"||a[i]=="u"){
                count++
            }
        }
        return count
    }
    console.log(countVovels("javascript"))
*/

/*
    function fact(n){
        let result=1
        for(let i=1;i<=n;i++){
            result=result*i
        }
        return result
    }
    let n=5
    let result=fact(n)
    console.log(`factorial of ${n} is ${result}`)
*/

/*
    function  StringReverse(str){
        let reversed=str.split("").reverse().join("")
        return reversed
    }
    console.log(StringReverse(" hello there"))
*/

/*
    function StringReverse(strg){
        let result=""
        for(let i=strg.length-1;i>=0;i--){
            result+=strg[i]
        }
        return result
    }
    console.log(StringReverse("hello kl"))
*/

/*
    function isPlalindrome(str){
        let result=""
        result=str.split("").reverse().join("")
        if(str===result){
            console.log("palindrome")
        }
        else{
            console.log("not palindrome")
        }
    }
*/

/*
    function Ispalindrome(str){
        let result=""
        for(let i=str.length-1;i>=0;i--){
            result+=str[i]

        }
            if(str===result){
                console.log(`${str} is palindrome`)
            }else{
                console.log(`${str} is not palindrome`)
            }
        
    }
    Ispalindrome("madam")
*/

/*
    function ArraySum(arr){
        let sum=0
        for(let i=0;i<arr.length;i++){
            sum+=arr[i]
        }
        return sum
    }
    console.log(ArraySum([1,2,3,4,5,6]))
*/

/*
    function largest(arry){
        let largest=arry[1]
        for(let i=0;i<arry.length;i++){
            arry[i]>largest
            largest=arry[i]
        }
        return largest
    }
    console.log(largest([1,2,3,4,5]))
*/

/*
    function Prime(n){
        for(i=2;i<n;i++){
            if(n%i==0){
                console.log("Not prime")
                return
            }
            else{
                console.log(" prime")
                return
            }
        }
    }
    Prime(7)
*/

/*
    function Fibonacci(n){
        let fib=[0,1]
        for(let i=2;i<=n;i++){
        fib[i]=fib[i-1]+fib[i-2]
        }
        console.log(fib.join(","))
        return fib
    }
    Fibonacci(10)
*/

/*
    function CountVovels(str){
        let count=0
        str=str.toLowerCase()
        for(i=0;i<str.length;i++){
            if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
                count++
            }
        }
        return count
    }
    console.log(CountVovels("HelloieU"))
*/


/*
function CountVovels(str){
    return(str.match(/[aeiou]/gi)||[]).length
}
console.log(CountVovels("hello"))

*/
/* Explanations--->This is a regular expression(regex)
    [aeiou]--->looking for any one match these characters
    /gi ---->g-->Global flag(find all matches,Not just the first)
    i---->Case-insenstitive(both upper and lowercase)
    str.match()------>returna a array with matched elements
    || []------->  if doesn't find any match then it retruns a null
    .length--->counts the number of items in that array */

/*
    function captalizeFirst(str){
        let string=str[0].toUpperCase()+str.slice(1)
        return string
    }
    console.log(captalizeFirst("hey this is"))
*/

/*
    function MergeArray(a,b){
        let Mergedarry=a+","+b
        return Mergedarry
    }
    console.log(MergeArray([1,2,3,4],[5,6,7]))
*/

/*
    function Mergedarry(a,b){
        return[...a,...b]
    }
    console.log(Mergedarry([1,2,3,4],[5,6,7,8]))
*/


// duplication

/*
    function ArraySort(arry){
    return arry.sort()
    }
    console.log(ArraySort([1,6,2,8,4]))
*/

/*
function sorting(arr){
    for(let i=0;i<arr.length;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    return arr
}
console.log(sorting([1,4,5,7,3,10,0]))
*/
/*
    This works at first iteration min=1-->min=1
    j=i+1--->j=4(index 1)-->comparing arr[j]<arr[min]---> 4<1 the condition is not true so j itereate its value then comapre 5<1 again the contition is not true ....so after j's index get 6 that is the value becames zero---> 0<1 the condition becames true so it changes its min value to j( min=j)
    so it exit form the j loop and continue the next step that is the swapping after swapping the array be like [0,4,5,7,3,10,1] then the i increment and so on
*/

/*
    function ArraySort(arry){
        for(let i=0;i<arry.length;i++){
            let min=i
            for(let j=i+1;j<arry.length;j++){
                if(arry[j]<arry[min]){
                    min=j
                }
            }
            let temp=arry[i]
            arry[i]=arry[min]
            arry[min]=temp
        }
        return arry
    }
    console.log(ArraySort([1,0,9,3,7,2,5,6,4]))
*/

/*
    function AvgArray(arry){
        let sum=0
        for(i=0;i<arry.length;i++){
            sum+=arry[i]
        }
        return (sum /arry.length).toFixed(2)
    }
    console.log(AvgArray([1,3,4,78,91,4,65]))
*/


/*  GCD---->Is the largest number that divided both numbers without leaving a remainder
    GCD  -->Greatest Common Divisor
*/

/*
    function Gcd(a,b){
        let n
        let result
    if(a>b){
            n=b
    }
    else {
            n=a
    }
    for(let i=1;i<n;i++){
            if((a%i==0)&&(b%i==0)){
                result=i    
            }
    } 
        console.log(`GCD of ${a} and ${b} is:${result}`)
    }
    Gcd(12,18)
*/