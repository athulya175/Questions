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


/**                
    LCM(a,b)=a*b/GCD(a,b)
 */
/*
    function Lcm(a,b){
        let gcd
        let lcm
        let maxm=Math.max(a,b)
        for(i=1;i<maxm;i++){
            if((a%i==0)&&(b%i==0)){
            gcd=i  
            }
        }
    console.log(lcm=(a*b)/gcd)
    }
    Lcm(12,18)
*/

/*
    function leapYear(year){
    if((year%4===0 && year%100!==0)||(year %400===0)){
        return true
    }else{
        return false
    }
    }
    console.log(leapYear(1900))
*/


/*
    function reverseWord(str){
        return str.split(" ").reverse().join(" ")
    }
    console.log(reverseWord("Js is very Simple"))
*/

/*
    function WordReverse(stng){
        let splited= stng.split(" ")
        let reversed=""
        // console.log(splited.length)
        for(let i=splited.length-1;i>=0;i--){
            reversed= reversed+splited[i]+" "
        }
        return reversed
    }
    console.log(WordReverse("This js is too simple"))
*/


/*
    function SecondLargest(str){
        for(let i=0;i<str.length;i++){
            let min=i
            for(let j=i+1;j<str.length;j++){
                if(str[j]<str[min]){
                    min=j
                }
            }
                let temp=str[min]
                str[min]=str[i]
                str[i]=temp
            }
        return str[str.length-2]
    
    }
    console.log(SecondLargest([1,5,10,50,90,40,3]))
*/

/*
    function Ocuurence(a,b){
        let count=0
        for(i=0;i<a.length;i++){
            if(b==a[i]){
                count++
            }
        }
        return count
    }
    console.log(Ocuurence([1,22,3,3,2,4,5,3,7,3,8],3))
*/

/*
    function Issorted(arry){
        for(i=0;i<arry.length;i++){
            if(arry[i]>arry[i+1]){
                return false
            }
        }
        return true
    }
    console.log(Issorted([11,12,0,1,2,4]))
*/

/* split only works on strings */

/*
    function SumofDigits(num){
        let sum=0
        let strnum=num.toString().split("")
        let number=strnum.map(Number)
        for(let i=0;i<number.length;i++){
            sum=sum+number[i]
        }
        return sum
    }
    console.log(SumofDigits(12345))
*/

/* Armstrong numbers are those number eg:153
        total no of digits-->3
        so, 1^3+5^3+3^3=153
*/



/*
    function Armstrong(n){
        let sum=0
        let nodigits=n.toString().length
        let digits=n.toString().split("").map(Number)
        for(let i=0;i<digits.length;i++){
            sum+=digits[i]**nodigits
        }
        if(sum==n){
            console.log(`${n} is Armstrong`)
        }
        else{
            console.log(`${n} is not Armstrong`)
        }

    }
    Armstrong(159)
*/

/*  Formula to convert Fahrenheit to Celsius
        c=(f-32)*(5/9)
*/

/*
    function ToCelsius(n){
        let Celsius=(n-32)*(5/9)
        console.log(`${n}°F is converted into ${Celsius}°C`)
    }
    ToCelsius(98.6)
*/

/*
    function RandomNumGeneraton(min,max){
        return Math.floor(Math.random()*(max-min+1))+min
    }
    console.log(RandomNumGeneraton(1,10))
*/

/*
    *(max-min+1)---->result (if 1,10) ans 10 so if in case  random no is created as 0.65 then it multiplies it with(max-min+1) that is 10,so result will br 6.5 insted of0.65
    +min is using to-------->shifts the range so it starts from min insted of 0, that is if we get floor as 6,adding min(1) gives 7
*/

/*
    function RepeatString(str,n){
        for(i=0;i<n;i++){
            console.log(str)
        }
    }
    RepeatString("hey",3)
*/

/*
    function GetAscii(num){
        return num.charCodeAt(0)
    }
    console.log(GetAscii("A"))
*/

/*
    function Square(num){
        return num*num
    }
    console.log(Square(3))
*/


/*
    function Cube(num){
        return num*num*num
    }
    console.log (Cube(10))
*/

/*
    function checkSubstring(str,sub){
        let substr=str.split(" ")
        for(let i=0;i<substr.length;i++){
            if(sub==substr[i]){
                console.log("Its a substring")
                return
            }
            else{
                console.log("its not a substring")
                return
            }
        }
        
    }
    checkSubstring("this is substring","thise")
*/


/*
    function CurrentDate(){
        return new Date().toLocaleDateString()
    }
    console.log(CurrentDate())
*/

/*
    function CurrentTime(){
        return new Date().toLocaleTimeString()
    }
    console.log(CurrentTime())
*/

/*
    function CountWords(str){
        let splited=str.split(" ")
        return splited.length
    }
    console.log(CountWords("hello this is"))
*/

/*
    function GetInitials(name){
        let splited=name.split(" ")
        let initial= splited[0][0]+splited[1][0]
        return initial.toUpperCase()
    }
    console.log(GetInitials("lex Luther"))
*/


/*
    function EqualityOfArray(a,b){
        if(a.length!==b.length){
            return false
        }
            for(i=0;i<a.length;i++){
                if(a[i]!==b[i]){
                return false
            }
        }
        return  true
    }
    
    console.log(EqualityOfArray([1,2,3,4],[1,2,3,4]))
*/


/*
    function removeSpace(str){
        let joined= str.split(" ").join("")
        return joined
    }
    console.log(removeSpace("this is a"))
*/


/*  Falsy values are -->false,0,""(empty string),null,undefined,NaN*/
/*
    function RemoveFalsyValues(arr){
        return arr.filter(Boolean)
    }
    console.log(RemoveFalsyValues([0,1,false,2,'',undefined]))
*/


/* not corrected
    function RemoveFalsyValues(arr){
        for(let i=0;i<arr.length;i++){
            if(arr[i]==="undefined"||arr[i]===""||arr[i]=="0"||arr[i]==="null"||arr[i]==="NaN"){
                arr[i].remove()
            }
        }
    }
    console.log(RemoveFalsyValues([0,1,false,2,'',undefined]))
*/

/*
    function RemoveFalsyValues(a){
        let result=[];
        for(let i=0;i<a.length;i++){
            if(a[i]){                         // This is a short hand of truthy values
                result.push(a[i])
            }
        }
        return result
    }
    console.log(RemoveFalsyValues([0,1,false,2,'',undefined]))
*/


/*flattening array------>It means converting a nested array in a nested array into a single level array*/


/*
    function flattedArray(arr){
        let singleary=arr.toString().split(",")
        return singleary.map(Number)

        
    }
    console.log(flattedArray([1,2,[4,5,[7,8]]]))
*/


/*
    chunk Array------>Chunk array means splitting a large array into smaller arrays("Chunks") of a specified size
*/


/*
    function SplitArray(arry,n){
        const len=arry.length
        const result=[]
        const size=Math.ceil(len/n)
        for(let i=0;i<len;i+=size){
            result.push(arry.slice(i,i+size))
        }
        return result
    }console.log(SplitArray([1,2,3,4,5,6,7,8],3))
*/


/*
    function RemoveElemnt(arr,n){
        let removedary=[]
        for(let i=0;i<arr.length;i++){
            if(arr[i]!==n){
                removedary.push(arr[i])
            }
        }
        return removedary
    }
    console.log(RemoveElemnt([1,3,4,2,6,7,8],3))
*/


/*
    function Intersection(a,b){
        let interele=[]
            for(let i=0;i<a.length;i++){
                for( let j=0;j<b.length;j++){
                    if(a[i]===b[j]){
                        interele.push(a[i])
                    }
                }
            }
            return interele
    }
    console.log(Intersection([1,2,3],[5,6,3,8]))
*/


/*
function Union(a,b){
    let concat=[...a,...b]
    let result=new Set(concat)
    return [...result]
}
console.log(Union([1,2,3,4,5],[5,6,7,8]))
*/



/*
    function MissingNo(a,n){
        let sum=0
        let sumarr=0
            sum=n*(n+1)/2
            for(let i=0;i<a.length;i++){
                sumarr+=a[i]
            }
            let missing=sum-sumarr
            return missing     
    }
    console.log(MissingNo([1,2,3,4,5,6],7))
*/
