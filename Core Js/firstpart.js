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
    





