/* Promise is nothing but result of a asynchronous operation(something that takes time,like fetching data from server)
 it can be in one of three states:
 Pending:Still working(not finished yet)
 Fulfilled(Resolved):Operation completed successfully
 Rejected:Operation failed(error)
*/

// creating a promise
// let myPromise=new Promise((resolve,reject)=>{
//     let success=true;
    
// })
let container=document.querySelector(".container")
let btn=document.createElement("button")
btn.className="btn"
btn.textContent="Click me to display Date and Time"
container.appendChild(btn)
let displayTime=document.createElement("div")
// displayTime.className="displayTime"
container.appendChild(displayTime)
let date =new Date()
console.log(date)
btn.addEventListener("click",()=>{
    displayTime.textContent=date

})


