//**********************DATA TYPE******************/
/*
    let a=undefined
    console.log(typeof(a))

    //Big int (creating two ways)

    const big=12336574389656591653495n
    console.log(typeof(big))

    const big1=BigInt("88736596965402802856746502470650265")
    console.log(typeof(big1))

    // convert a string to number and number to string with out using parseint

    let b="12345"
    console.log(typeof(b))

    let bobj=b.split("").map(Number)     
    console.log(typeof(bobj))      // object

    let bno=Number(b)
    console.log(typeof(bno))      //number

    let bstr=toString(bno)
    console.log(typeof(bstr))           //string

    // By using  parse int()

    let parsenum=parseInt(b)
    console.log(typeof(parsenum))       //number
*/

//******************************Variables*****************/

/*
    let a=12
    a=13
    console.log(a)      //13

    var b=12
    b=14
    console.log(b)      //14

    const c=12
    // c=14
    // console.log(c)      //error

    // A variable hoisting with var

    console.log(d)      // undefined
    var d=14
    console.log(d)      //14

    // console.log(e)      //reference error
    // let e =15
    // console.log(e)


    {
        let f=10
        var g=20
        const h=30
    }
    // console.log(h)      //error
    console.log(g)      //20
    // console.log(f)         // error

*/

//*************************************Operators*******************/

/*
    let a=12,b=30,temp
    console.log(a,b)
    temp=a
    a=b
    b=temp
    console.log(a,b)

    let num=-12
    let result=num>0?"positive":num<0?"Negative":"Zero"
    console.log(result)

    let n=6
    let res=n==0?"Zero":n%2==0?"Even":"odd"
    console.log(res)

    let x=103,y=30
    let ans=x>y?`${x} is greater`:`${y} is greater`
    console.log(ans)

    let age=10
    let eligible=age>=18?"Eligible":"Not eligible"
    console.log(eligible)

    let mark=80
    let grade=mark>=90?"A":mark>=75?"B":mark>=50?"C":"F"
    console.log(grade)

    let pass="arfryyui0i"
    let len=pass.length
    let check=len>8?"Strong":"Weak"
    console.log(check)

    let div=3
    let res1=((div%3==0)&&(div%5==0))?"Divisible":"Not divisible"
    console.log(res1)

    if((div%3==0)&&(div%5==0)){
        console.log("Divisible")
    }
    else{
        console.log("Not Divisible")
    }
*/

//**********************************Conditional Statements********************/
/*
    let num =60
    if(num==0){
        console.log("zero")
    }
    else if(num%2==0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }


    let mark=50
    if(mark>=90){
        console.log("A")
    }
    else if(mark>=75){
        console.log("B")
    }else if(mark>=50){
        console.log("C")
    }
    else {
        console.log("F")
    }


    let day=8
    switch(day){
        case 1:console.log("monday")
                break;
        case 2:console.log("Tuesday")
                break;
        case 3:console.log("Wednesday")
                break;
        case 4:console.log("Thursay")
                break;
        case 5 :console.log("Friday")
                break;
        case 6:console.log("Saturday")
                break;
        case 7:console.log("Sunday")
                break;
        default: console.log("Invalid")
                break;
    }
*/

/*****************************Loops********************************/

/*
    // const div=document.querySelector(".result")
    // var num
    // function Getvalue(){
    //     num=document.getElementById("text").value
    //     let values=""
    //     for(i=0;i<=num;i++){
    //         values+=i+","
    //     }
    //     div.textContent=values
    // }

    // const div=document.querySelector(".result")
    // var num
    //     function Getvalue(){
    //         num=document.getElementById("text").value
    //         let result=""
    //         for(let i=1;i<=10;i++){

    //              result+=(`${i}*${num}=${i*num}<br><br>`)
    //         }
    //         div.innerHTML=result
    //     }

    let sum=0
    for(let i=1;i<=100;i++){
        sum=sum+i
    }
    console.log(sum)



    // let i=1
    // while( i<=10){
    //     console.log(i)
    //     i++
    // }


    let i=1
    do{
        console.log(i)
        i++
    }
    while(i<=10)


    let arr=[1,2,3,4,5,6,7,8]
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
        
    let arr1=[1,2,3,4,5,6,7]
    for(let value of arr){
        console.log(value)
    }


    let arr2=[1,2,3,4,5,6,7,8]
    for(let index in arr){
        console.log(index,arr[index])
    }
*/

/*****************************Functions********************************/

/*
    function fact(n){
        let fact=1
        for(let i=1;i<=n;i++){
            fact*=i
        }
        return fact
    }
    console.log(fact(10))



    const StringWord=(str,word)=>{
        let splited=str.split(" ")
        for(let i=0;i<splited.length;i++){
            if(splited[i]===word){
                console.log("Word is present")
                return
            }
            else{
                console.log("word is not present")
                return
            }
        }
    }
    StringWord("hello hey there","hell")



    const Greeting=(name)=>{
        console.log(`Hello ${name}!`)
    } 
    Greeting("Luther")
*/

/*****************************Array********************************/

/*
    let arr=["Apple","Orange","Grapes"]
    arr.push("pineapple")
    console.log(arr)                        //Adds at the end

    arr.pop()
    console.log(arr)        //removes end element

    arr.unshift("pineapple")        // adds at the begining
    console.log(arr)

    arr.shift()
    console.log(arr)            //removes the first element

    arr.splice(0,1)
    console.log(arr)        // remove at aperticular index



    let arry=[1,2,3,4,5,6]
    let double=arry.map(x=>x*2)
    console.log(double)

    let even=arry.filter(x=>x%2==0)
    console.log(even)

    let sum=arry.reduce((acc,num)=>acc+num)
    console.log(sum)

    let maxnum=arry.reduce((acc,num)=>acc<num?num:acc)
    console.log(maxnum)

    let arry1=[4,2,9,1]
    let sorts=arry1.sort((a,b)=>a-b)
    console.log(sorts)


    // First number greater than 10

    let arry2=[101,1,1,12,17]
    let greater=arry2.reduce((acc,num)=>acc>10?acc:num)
    console.log(greater)
*/

/**********************************String************************************************/
/*
    let str="hello"
    let reverse=""
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i]
    }
    console.log(reverse)


    function CountVovels(){
        return(str.match(/[aeiou]/gi||[])).length
    }
    console.log(CountVovels("helloi"))


    let strng=" hello there every one seems sky"
    let newstr=strng.split(" ").join("-")
    console.log(newstr)

    let str4="JavaScript"
    let firstFive=str4.slice(0,5)
    console.log(firstFive)
*/

/*********************************Objects*********************************/
/*
    let details={
        name:"Athulya",
        age:25,
        grade:"A"
    }

    function Greeting(details){
            console.log(`Hello my name is ${details.name}`)
    }
    Greeting(details)


    let{name,age,grade}=details
    console.log(name)
    console.log(age)
    console.log(grade)


    for(let key in details){
        console.log(key+":",details[key])
    }
*/

/*****************************Math Object********************************/
/*
    max=100
    min=1
    let random=Math.floor(Math.random()*(max-min-1))+min
    console.log(random)

    let arr1=[10,45,2,99]
    let maxm=Math.max(...arr1)
    let minm=Math.min(...arr1)
    console.log(maxm,minm)

    let floorvalue=Math.floor(4.7)
    let ceilValue=Math.ceil(4.7)
    console.log(floorvalue,ceilValue)
*/

/****************************Date Object***************************************/
let date=new Date().toLocaleDateString()
console.log(date)

let today=new Date()
let fdate=String(today.getDate()).padStart(2,"0")
let fmonth=String(today.getMonth()+1).padStart(2,"0")
let fyear=String(today.getFullYear()).slice(-2)
console.log(`${fdate}/${fmonth}/${fyear}`)



let today1= new Date().toLocaleTimeString()
console.log(today1)

let time=new Date()
let fhour=String(time.getHours()).padStart(2,"0")
let fmints=String(time.getMinutes()).padStart(2,"0")
let fsecs=String(time.getSeconds()).padStart(2,"0")
console.log(`${fhour}:${fmints}:${fsecs}`)


//Find what day of the week a given date falls on.

let date1= new Date("2004-05-30")
let days=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"]
let dayno=days[date1.getDay()]
console.log(dayno)
