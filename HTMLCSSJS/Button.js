//*****************************Beginner Level*************************** */

/*
    //Problem-1
    let container =document.querySelector(".container")
    let colours=["green","pink","peach","yellow"]
    let i=0
    function Click(){
        container.style.backgroundColor=colours[i]
        i++
        if(i>colours.length){
            i=0
        }
    }
*/

/*
    //problem2
    const text=document.getElementById("clickhere")
    const h1=document.getElementById("h1")
    text.addEventListener("click",()=>{
        if(h1.style.display==="block"){
            h1.style.display="none"
            text.textContent="click here to show more"
        }
        else{
            h1.style.display="block"
            text.textContent="click here to show less"
        }
        
    })
*/


/*
    //problem3
    const increment=document.getElementById("increment-btn")
    const decrement=document.getElementById("decrement-btn")
    const countdisplay=document.getElementById("count")
    let count=0
    countdisplay.textContent=count
    increment.addEventListener("click",()=>{
        count=count+1
       countdisplay.textContent=count
    })
    decrement.addEventListener("click",()=>{
        count=count-1
        countdisplay.textContent=count
    })
*/

/*
    //problem4
    const hov=document.getElementById("hov")
    hov.addEventListener("mouseover",()=>{
        hov.textContent="Leave me"
        hov.style.color="red"
    })
    hov.addEventListener("mouseleave",()=>{
        hov.textContent="Hover Me"
        hov.style.color="green"
    })
*/

//***********************Intermediate Level******************************** */
/*
    //problem5
    const text= document.querySelector(".txt")
    const btn=document.querySelector(".btn")
    const unorderd=document.getElementById("unorderd")
    btn.addEventListener("click",()=>{
        const lists=text.value
        if(lists!==""){
            const li=document.createElement("li")
            li.textContent=lists
            unorderd.appendChild(li)
            text.value=""
        }
    })
*/


/*
    //problem6
    const color=document.querySelector(".color")
    const click=document.querySelector(".click")
    const Showclr=document.querySelector(".Showclr")
    click.addEventListener("click",()=>{
        const filclr=color.value
        Showclr.style.backgroundColor=`${filclr}`
        color.textContent=""
    })
*/

/*
    //problem7
    const input=document.querySelector(".input")
    const click=document.querySelector(".click")
    const unorderd=document.getElementById("unorderd")
    click.addEventListener("click",()=>{
        let contents=input.value
        let li=document.createElement("li")
        li.classList.add("listid")
        li.textContent=contents

        let cross=document.createElement("span")
        cross.innerHTML="\u00d7"
        li.append(cross)
        unorderd.appendChild(li)
        input.value=""
        cross.addEventListener("click",(event)=>{
                li.remove()
            })
        li.addEventListener("click",()=>{
            li.style.textDecoration="line-through"
            li.style.listStyle="disc"
        
        })
    })
*/


/*
    //problem8
    const alldt=document.getElementsByTagName("dt")
    const alldd=document.getElementsByTagName("dd")
    for(let i=0;i<alldt.length;i++){
        alldt[i].addEventListener("click",()=>{
            if(alldd[i].style.display=="block"){
                alldd[i].style.display="none"
            }
            else{
                alldd[i].style.display="block"
            }
        
    })
    }
*/


/*
    //problem9
    const images=document.querySelectorAll(".problem9 img")
    const prev=document.getElementById("prev")
    const next=document.getElementById("next")
    let curindx=0
    images.forEach(x=>x.style.display="none")
    images[curindx].style.display="block"

    next.addEventListener("click",()=>{
        images[curindx].style.display="none"
        curindx=(curindx+1+images.length)%images.length
        images[curindx].style.display="block"
    })
    prev.addEventListener("click",()=>{
        images[curindx].style.display="none"
        curindx=(curindx-1+images.length)%images.length
        images[curindx].style.display="block"
    })
*/

//****************************Challenge Level******************************* */

/*
const labels=document.getElementsByTagName("input")
const btn=document.querySelector(".submit")
const form=document.getElementById("form")
const names=document.getElementById("name")
const password=document.getElementById("password")
const email=document.getElementById("email")
form.addEventListener("submit",function(event){
    names.setCustomValidity("")
    password.setCustomValidity("")
    email.setCustomValidity("")
    if(names.value.trim()===""){
        names.setCustomValidity("Please enter your name")
    }
    if(!email.value.includes("@")){
        email.setCustomValidity("Email must contain '@'")
    }
*/



/*
    let lists=document.querySelectorAll(".list")
    let rytbox=document.querySelector(".right")
    let lftbox=document.querySelector(".left")
    for(list of lists){
        list.addEventListener("dragstart",function(e){
            let selected=e.target
            lftbox.addEventListener("dragover",function(e){
                e.preventDefault()
            })
            lftbox.addEventListener("drop",function(e){
                lftbox.appendChild(selected)
                selected=null
            })
            rytbox.addEventListener("dragover",function(e){
                e.preventDefault()
            })
            rytbox.addEventListener("drop",function(e){
                rytbox.appendChild(selected)
                selected=null
            })
        })
    }
*/


/*
    const dark = document.getElementById("night")
    const light=document.getElementById("light")
    const bg =document.querySelector(".content")
    dark.addEventListener("click",()=>{
        console.log("click")
            bg.style.backgroundColor="#0b0423"
            bg.style.color="white"
    })
    light.addEventListener("click",function(){
        bg.style.backgroundColor=" lightgray"
        bg.style.color="black"
    })
*/


/*
    const btn=document.querySelector(".model")
    btn.addEventListener("click",()=>{
        const maincnt=document.createElement("div")
        maincnt.id="maindiv"
        maincnt.innerHTML=`
        <div class="container">
            <h1>doloribus</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class="okbtn">OK</button>
        </div>
        `
        document.body.appendChild(maincnt)
        let okbtn=document.querySelector(".okbtn")
        okbtn.addEventListener("click",()=>{
            maincnt.remove()
        })
    })
*/



/*
let inputvalue=document.getElementById("input")
let searchid=document.getElementById("searchid")
let tablevalue=document.querySelectorAll("td")
let unorderd=document.querySelector(".unorderd")
searchid.addEventListener("click",()=>{
    let searched=inputvalue.value
    tablevalue.forEach(td => {
        let values=td.textContent.toLocaleLowerCase()
       let searched=inputvalue.value.toLocaleLowerCase()
       if(values===searched){
        td.parentElement.style.backgroundColor="yellow"
        let li=document.createElement("li")
        li.textContent=td.parentElement.textContent
        console.log(td.parentElement)
       unorderd.appendChild(li)
       }  
    });    
})
*/


/****************************************************************************************/

/*
    const text=document.getElementById("text")
    const count=document.getElementById("count")
    const limit=document.getElementById("limit")
    text.addEventListener("input",()=>{
        let textvalue= text.value
        count.textContent=`${textvalue.length-1}/200`
        if(textvalue.length>200){
            text.value=textvalue.substring(0,200)
            limit.textContent="You can only enter 200 Words"
        }
        else{
            limit.textContent=""
        }
    })
*/

/*
    const images=document.querySelectorAll("img")
    images.forEach(img => {
    img.addEventListener("click",()=>{
        const modebox=document.createElement("div")
        modebox.id="modelbx"
        modebox.innerHTML=`
        <div class=imagefull>
        <img src="${img.src}">
        <button class="close">X</button>
        </div>
        `
        document.body.appendChild(modebox)
        let close=document.querySelector(".close")
        close.addEventListener("click",()=>{
            modebox.remove()
        })
    }) 
    });
*/


/*
    const invalue=document.getElementById("inputid")
    const btn=document.querySelector(".btn")
    let strength=document.querySelector(".strength")
    const spl=/[!@#$%^&*()_+]/

    invalue.addEventListener("input",()=>{
        let values=invalue.value
        if((values.length>10)&&(spl.test(values))){
            strength.textContent="Its a strong one💪"
            
        }else if((values.length>6)&&(values.length<=10)){
            strength.textContent="Its a medium 🙂(add special chars to make stronger)"
            
        }else{
            strength.textContent="Its a weak one 😢"
        
        }
        btn.addEventListener("click",()=>{
            strength.textContent=""
            invalue.value=""
        })
        
    })
*/


/*
    const btn1=document.getElementById("btn1")
    const btn2=document.getElementById("btn2")
    const btn3=document.getElementById("btn3")
    const content=document.querySelector(".content")
    const p1=document.getElementById("p1")
    const p2=document.getElementById("p2")
    const p3=document.getElementById("p3")
    function hideAll(){
        p1.style.display="none"
        p2.style.display="none"
        p3.style.display="none"
    }
    btn1.addEventListener("click",()=>{
        hideAll()
        p1.style.display="block"
    })
    btn2.addEventListener("click",()=>{
        hideAll()
        p2.style.display="block"
    })
    btn3.addEventListener("click",()=>{
        hideAll()
        p3.style.display="block"
    })
*/



/*
    const Showtime=document.querySelector(".Showtime")
    const start=document.getElementById("start")
    const stop=document.getElementById("stop")
    const reset=document.getElementById("reset")
    let intervel
    let starttime
    start.addEventListener("click",()=>{
        starttime =new Date()
        intervel=setInterval(()=>{
        let difference=Date.now()-starttime
        let millisecds=Math.floor((difference%1000)/10)
        let seconds=Math.floor((difference/1000)%60)
        let minutes=Math.floor((difference/60000)%60)
        let hours=Math.floor(difference/3600000)

        let display=
        String(hours).padStart(2,"0")+":"+
        String(minutes).padStart(2,"0")+":"+
        String(seconds).padStart(2,"0")+":"+
        String(millisecds).padStart(2,"0")
        Showtime.textContent=display

    },100)
    })
    stop.addEventListener("click",()=>{
        clearInterval(intervel)
    })
    reset.addEventListener("click",()=>{
        clearInterval(intervel)
        Showtime.textContent="00:00:00:00"
    })

*/



/*
    const text=document.getElementById("text")
    const lists=document.querySelectorAll("li")

    text.addEventListener("input",()=>{
        let texts=text.value.toLowerCase()
        lists.forEach(li => {
            let lst=li.textContent.toLocaleLowerCase()
            if(lst.includes(texts)){
                li.style.display="block"
            }
            else{
                li.style.display="none"
            }
        });
    
        
    })
*/



/*
    const overlay=document.querySelector(".seven")
    const btn=document.querySelector(".up")
    btn.style.display="none"
    overlay.addEventListener("scroll",()=>{
        if(overlay.scrollTop>200){
            btn.style.display="block"
        }
        else{
            btn.style.display="none"
        }
        btn.addEventListener("click",()=>{
            overlay.scrollTop=0
        })

    })
*/


/*
    const weight=document.getElementById("weight")
    const height=document.getElementById("height")
    const btn=document.querySelector(".btn")
    const result=document.querySelector(".result")
    btn.addEventListener("click",()=>{
        let vweight=weight.value
        let vheight=height.value
        let bmi=vweight/(vheight)**2
        console.log(bmi)
        console.log(vweight)
        console.log(vheight)
        if(bmi<18.5){
            result.textContent="Low weight for height"
        }
        else if((bmi>18.5)&&(bmi<24.9))
            result.textContent="Healthy Weight"
        else if((bmi>25)&&(bmi>29.9))
            result.textContent="Higher than normal weight"
        else if(bmi>=30)
            result.textContent="High risk of weight-related health issues"
        else
            result.textContent="Enter correct weight or height"
    })
*/

let quotes=[{
    quo:"Be yourself;everyone else is already taken",
    auth:"Oscar Wilde"
},
{
    quo:"I'm Selfish,impatient and a little insecure.I make mistakes,I am out of control and at times hard to handle.But if you can't handle me at my worst,then you syre as hell don't deserve me at my best",
    auth:"Marilyn Monore"
},
{
    quo:"So many books,so little time",
    auth:"Frank Zappa"
},
{
    quo:"Two things  are infinite:the universe and human stupidity;and i'm not sure about the universe",
    auth:"Albert Einstein"
},
{
    quo:"A room without bookd is like a body without a soul",
    auth:"Marcus Tullis cicero"
},
{
    quo:"Be who you are and say what you feels,because those who mind don't matter,and those eho matter don't mind",
    auth:"Bernard M.Baruch"
},
{
    quo:"You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
    auth:"William W.Purkey"
},
{
    quo:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    auth:"Dr.Seuss"
},
{
    quo:"You only live once, but if you do it right, once is enough.",
    auth:"Mae West"
},
{
    quo:"Be the change that you wish to see in the world.",
    auth:"Mahatma Gandhi"
},
{
    quo:"In three words I can sum up everything I've learned about life: it goes on.",
    auth:" Robert Frost"
},
{
    quo:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    auth:" J.K. Rowling, Harry Potter and the Goblet of Fire"
},
{
    quo:"Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend",
    auth:" Albert Camus"
},
{
    quo:"If you tell the truth, you don't have to remember anything.",
    auth:" Mark Twain"

},
{
    quo:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    auth:" Maya Angelou"
},
{
    quo:"Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .",
    auth:"C.S. Lewis, The Four Loves"
}

]
