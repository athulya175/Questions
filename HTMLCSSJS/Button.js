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


/*
    let quotes=[{
        quo:`"Be yourself;everyone else is already taken"`,
        auth:"-Oscar Wilde"
    },
    {
        quo:`"I'm Selfish,impatient and a little insecure.I make mistakes,I am out of control and at times hard to handle.But if you can't handle me at my worst,then you syre as hell don't deserve me at my best"`,
        auth:"-Marilyn Monore"
    },
    {
        quo:`"So many books,so little time"`,
        auth:"-Frank Zappa"
    },
    {
        quo:`"Two things  are infinite:the universe and human stupidity;and i'm not sure about the universe"`,
        auth:"-Albert Einstein"
    },
    {
        quo:`"A room without bookd is like a body without a soul"`,
        auth:"-Marcus Tullis cicero"
    },
    {
        quo:`"Be who you are and say what you feels,because those who mind don't matter,and those eho matter don't mind"`,
        auth:"-Bernard M.Baruch"
    },
    {
        quo:`"You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth."`,
        auth:"-William W.Purkey"
    },
    {
        quo:`"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
        auth:"-Dr.Seuss"
    },
    {
        quo:`"You only live once, but if you do it right, once is enough."`,
        auth:"-Mae West"
    },
    {
        quo:`"Be the change that you wish to see in the world."`,
        auth:"-Mahatma Gandhi"
    },
    {
        quo:`"In three words I can sum up everything I've learned about life: it goes on."`,
        auth:" -Robert Frost"
    },
    {
        quo:`"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."`,
        auth:" -J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
        quo:`"Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend"`,
        auth:" -Albert Camus"
    },
    {
        quo:`"If you tell the truth, you don't have to remember anything."`,
        auth:" -Mark Twain"

    },
    {
        quo:`"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
        auth:" -Maya Angelou"
    },
    {
        quo:`"Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . ."`,
        auth:"-C.S. Lewis, The Four Loves"
    }

    ]


    const quote=document.querySelector(".quotes")
    const author=document.querySelector(".author")
    console.log(quotes.length)
    const btn=document.querySelector(".gen")
    btn.addEventListener("click",()=>{
        let index=Math.floor(Math.random()*quotes.length)+1
        quote.textContent=quotes[index].quo
        author.textContent=quotes[index].auth
    })
*/


    //Some propblem related to map
/*
    let arry=document.getElementById("arry")
    let nums=[1,2,3,4,5]
    let square=nums.map(x=>x*2)
    arry.textContent=square
*/

/*
    let nums1=[10,20,30]
    console.log(nums1)
   let string=nums1.map(x=>x.toString())
   console.log(string)

*/

/*
    let nums1=[10,20,25]
    let addfive=nums1.map(x=>x+5)
    console.log(addfive)
*/

/*
    let words=["apple","Orange","banana"]
    let caps=words.map(x=>x.toUpperCase())
    console.log(caps)
*/

/*
    let words=["h1","hello","world"]
    let wordlength=words.map(x=>x.length)
    console.log(wordlength)
*/

/*
    let users=[
        {name:"Alice",age:20},
        {name:"Bob",age:25},
        {name:"Charlie",age:30}
    ]

    let names=users.map(x=>x.name)
    console.log(names)
*/



/*
    let arry=document.getElementById("arry")
    let arr=[[1,2],[3,4],[5]]
    let single=arr.map(x=>x)
    arry.textContent=single
*/

/*
    let words=['JavaScript','Map','Problems']
    let firstletter=words.map(x=>x.charAt(0))
    console.log(firstletter)
*/

/*
    let words=["hello","world"]
    let firstcap=words.map(x=>x.charAt(0).toLocaleUpperCase()+x.slice(1))
    console.log(firstcap)
*/


/*
    const incrm=document.getElementById("incrm")
    const decrm=document.getElementById("decrm")
    const para=document.getElementById("para")
    incrm.addEventListener("click",()=>{
        let current_font=window.getComputedStyle(para).fontSize
        current_font=Number(current_font.slice(0,-2))
        let new_font=current_font+1
        console.log(new_font)
        para.style.fontSize=`${new_font}px`
    })
    decrm.addEventListener("click",()=>{
        let current_font=window.getComputedStyle(para).fontSize
        current_font=Number(current_font.slice(0,-2))
        let new_font=current_font-1
        para.style.fontSize=`${new_font}px`
    })
*/
    /*why we use window.getComputedStyle?
    -->Bcoz we set font size in css, if we directly set font size inside the html then we can console(para.style.fontsize,but here we set it in the css) */

/*
        let bg=document.getElementById("bg")
        let btn=document.getElementById("btn")
        btn.addEventListener("click",()=>{
            let img=["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png","http://t0.gstatic.com/images?q=tbn:ANd9GcQ30jPvve8TtXiou_QabziSWm1B5SJx5OmcHsF5krieRLehDelBpZrqf2GmF3j3eV3WoqgicwwM","http://t2.gstatic.com/images?q=tbn:ANd9GcTsV_3rJAjA5RJdAdBzoPZczv2IRQ5fLf5aB1gqvXS1J-SGTQWiGzQSm69-2jVw6Px7_4TBDUCH","http://t0.gstatic.com/images?q=tbn:ANd9GcRBMJuzoZaucOrFBczKLl6BJrKFYHkonWsjRWICEH4TYjQ9Sfqh36nUOEVaqrmOjN9mhEXp9BUB","http://t2.gstatic.com/images?q=tbn:ANd9GcRUgEns67LsrCAg_3JUFKo89zBo9GTIb0cbqddFQOLXBDP5qp1vDDdhGxOPs8SiF8YYMnV93LaE"]
            let i=Math.floor(Math.random()*img.length)+0
            console.log(i)
            bg.style.backgroundImage=`url(${img[i]}) `
            console.log(`${img[i]}`) 

        })
*/



/*
    const inptxt=document.getElementById("inptxt")
    const btn=document.getElementById("btn")
    let converts=document.querySelector(".convert")
    inptxt.addEventListener("click",()=>{
        converts.textContent=""
    })
    btn.addEventListener("click",()=>{
        let converted=inptxt.value.toUpperCase()
        converts.textContent=`${converted}`
        btn.style.backgroundColor="green"
        setInterval(()=>{
            btn.style.backgroundColor=""
        },2000)
        inptxt.textContent="" 
    })
*/



/* .value only works for form element (input,texxtarea,select  and they dont works on <div>,<p>,<span>) */


/*
    let like=document.getElementById("like")
    let unlike=document.getElementById("unlike")
    let txt=document.querySelector(".txt")
    like.style.display="none"

        unlike.addEventListener("click",()=>{
            like.style.display="block"
            unlike.style.display="none"
            txt.textContent="Thanks for your like"
        })
        like.addEventListener("click",()=>{
            console.log("hello")
            like.style.display="none"
            unlike.style.display="block"
            txt.textContent="Hit's The Like Button"
        })

    unlike.addEventListener("click",()=>{
        console.log("hey")
        like.style.display="block"
        unlike.style.display="none"
    })
*/

/*************************Intermediate***********************/


/*
    const btn=document.getElementById("increase")
    const progressbar=document.querySelector(".progressbar")
    const layout=document.querySelector(".layout")
    const rslt=document.querySelector(".rslt")

    btn.addEventListener("click",()=>{
    let current=window.getComputedStyle(progressbar).width
    let total=window.getComputedStyle(layout).width
    
        total=Number(total.slice(0,-2))

        console.log(total)
    let values=Number(current.slice(0,-2))
    let newval=Math.floor(values+(values/10))
    console.log(newval)
    if(newval>total){
        newval=total
        console.log(`if${newval}`)
        progressbar.style.width=`${newval}px`
        rslt.textContent="100% Completd"
    }
    else{
        progressbar.style.width=`${newval}px`
        rslt.textContent=`Loading...`
    }  
    })
*/

/*
    const inp=document.getElementById("inp")
    const result=document.querySelector(".result")
    const btn=document.getElementById("btn")
    const start=document.getElementById("strt")
    let rndm
    function randomGen(){
    rndm=Math.floor(Math.random()*100)+1
    return rndm
    
    }
    btn.addEventListener("click",()=>{
        start.textContent="Replay"
        let inpvalue=Number(inp.value)
        console.log(` inp${inpvalue}`)
        console.log(`rndm${rndm}`)
        if(inpvalue===rndm){
            result.textContent="its correct 🥳"
        }else if(inpvalue<rndm){
            result.textContent="Too Low 🙂"
        }
        else{
            result.textContent="Too High 🙃"
        }
    })
    start.addEventListener("click",()=>{
        randomGen()
        console.log(rndm)
    })
*/

/*
    const btn=document.getElementById("hamb")
    const list=document.querySelector(".undorder")
    btn.addEventListener("click",()=>{
        if(list.style.display==="block"){
            list.style.display="none"
        }else{
            list.style.display="block"
        }
    })
*/

/*
    const navbar=document.querySelector(".navbar")
    navbar.style.position="fixed"
    navbar.style.top="0"
*/


/*
    let btn=document.getElementById("start")
    let text=document.getElementById("sec")
    let inp=document.getElementById("inp")
    btn.addEventListener("click",()=>{
        let value=inp.value
    let timer= setInterval(()=>{
            value=value-1
            console.log(typeof(value))
            if(value===0){
                text.textContent="Time's up!"
                clearInterval(timer)
                return
            }else{
            text.textContent=`${value} Sec`
            }
            console.log(value)
        },1000)
        inp.value=""
    })
*/



/*
    let image=document.getElementById("images")
    image.addEventListener("mouseover",()=>{
        image.style.transform=`scale(1.5)`
    })
    image.addEventListener("mouseleave",()=>{
        image.style.transform=`scale(1)`
    })
*/


/*
    const questions=[
        {
            question:"What is the capital of France?",
            answers:[
                {option:"Madrid",correct:false},
                {option:"Paris",correct:true},
                {option:"Rome",correct:false},
                {option:"Berlin",correct:false}
            ]
        },
        {
            question:`Who is known as the "Father of Computers"? `,
            answers:[
                {option:"Charles Babbage",correct:true},
                {option:"Alan Turing",correct:false},
                {option:"Bill Gates",correct:false},
                {option:"Steve Jobs",correct:false}
            ]
        },
        {
            question:`Which planent is known as "Red Planet"?`,
            answers:[
                {option:"Earth",correct:false},
                {option:"Venus",correct:false},
                {option:"Mars",correct:true},
                {option:"Jupiter",correct:false}
            ]
        },
        {
            question:'What is the  chemical symbol for water?',
            answers:[
                {option:"O₂",correct:false},
                {option:"H₂O",correct:true},
                {option:"CO₂",correct:false},
                {option:"HO",continue:false}
            ]
        },
        {
            question:"Which is the largest mamal in the world?",
            answers:[
                {option:"Elephant",correct:false},
                {option:"Blue Whale",correct:true},
                {option:"Giraffe",correct:false},
                {option:"Hippopotamus"},
            ]
        },
        {
            question:"Which symbol is used for commonents in javaScript?",
            answers:[
                {option:"<!--comment-->",correct:false},
                {option:"#comment",correct:false},
                {option:"//comment",correct:true},
                {option:"*comment*",correct:false}

            ]
        },
        {
            question:"Which of the following is NOT a javascript data type?",
            answers:[
                {option:"String",correct:false},
                {option:"Number",correct:false},
                {option:"Boolean",correct:false},
                {option:"Character",correct:true}
            ]
        },
        {
            question:"How do you decalrea variable in JavaScript(Es6)?",
            answers:[
                {option:"Var",correct:false},
                {option:"Let",correct:false},
                {option:"Const",correct:false},
                {option:"All of the above",correct:true}
            ]
        },
        {
            question:"What does DOM stand for?",
            answers:[
                {option:"Data Object Model",correct:false},
                {option:"Document Object Model",correct:true},
                {option:"Digital Object Model",correct:false},
                {option:"Document Oriented Machine"}
            ]
        },
        {
            question:"Which operator is used to compare value and types in JavaScript?",
            answers:[
                {option:"=",correct:false},
                {option:"==",correct:false},
                {option:"===",correct:true},
                {option:"=>",correct:false}
            ]
        }
    ]
    const question=document.getElementById("question")
    const ans=document.querySelectorAll(".ans")
    const nxtbtn=document.querySelector(".btn")
    const layout=document.querySelector(".quiz")
    const container=document.querySelector(".container")
    const answers=document.getElementById("answers")
    let currentindexqn=0
    let score=0
    // console.log("total",questions.length)
    // question.textContent=`${currentindexqn+1}. ${questions[currentindexqn].question}`
    // // console.log(`${questions[currentindexqn].answers[currentindexqn].option}`)
    // questions[currentindexqn].answers.forEach((x,i)=>{
    //     ans[i].textContent=`${x.option}`
        
    // })

    // questions.forEach((x,currentindex)=>{
    //     console.log(`${currentindex+1}.${x.question}`)
    // })
    // answers.style.display="none"
    function display(){
        question.textContent=`${currentindexqn+1}. ${questions[currentindexqn].question}`
    // console.log(`${questions[currentindexqn].answers[currentindexqn].option}`)
    questions[currentindexqn].answers.forEach((x,i)=>{
        ans[i].textContent=`${x.option}`
    })
    }
    nxtbtn.addEventListener("click",()=>{
        answers.style.display="block"
    
        // console.log('index',currentindexqn)
        // console.log(questions.length)
        if(currentindexqn===questions.length-1){
            // console.log('qn',currentindexqn)
            nxtbtn.textContent="submit"
        layout.style.display="none"
        let div= document.createElement("div")
        div.innerHTML=`
        <div id="score">Score</div>`
        container.appendChild(div)
        let scores=document.getElementById("score")
        scores.textContent=`Your Score is : ${score}/${questions.length}`
        //  console.log("score",scores)
        return
        }else{
            // console.log(currentindexqn)
            nxtbtn.textContent="Next"
        }
        currentindexqn++
        display()
        userclick()
        
    })
    display()
    userclick()

    function userclick(){
        questions[currentindexqn].answers.forEach((x,i)=>{
        ans[i].onclick=()=>{
            let userclick=x.option
            // console.log("uclk",userclick)
            let chk=x.correct
            console.log(chk)
            if(chk===true){
                score++
                console.log(score)
            }
        }
    })
    }
    console.log("Score:",score)

*/
/*
    const form=document.getElementById("forms")
    //all are single string
    const fields=form.querySelectorAll("input,textarea,select")

    //restores saved values


    //↓  *waits until the page finishes loading,then we restore any saved data
    window.addEventListener("load",()=>{

    // ↓ *loops through every x we collected
        fields.forEach(x=>{
    // ↓ if this x is a checkbox,handle it as a group(bcoz they have multiple values)
            if(x.type==="checkbox"){
    // ↓ Get the saved array of hobbies from localstorage.and also if nothing is saved then use empty array
                let saved=JSON.parse(localStorage.getItem("hobbies"))||[]
    // ↓ Mark this checkbox as checked if its  value is in the saved array
                x.checked=saved.includes(x.value)
            }
            else if(x.type==="radio"){
    // ↓  restore radio groupGet the saved gender string(eg,"Female") from localStorage
                let saved=localStorage.getItem("gender") 
    // ↓    If there is a saved value and this radio's value matches it
                if(saved&&x.value===saved){
    //  ↓   cjeck this radio
                    x.checked=true
                }
            }
    //  ↓ For all other fields (text,email,password,textarea,select,date,number)
            else{
    //  ↓   read the saved value using the x's id as the key
                let saved=localStorage.getItem(x.id)
    // ↓ if a value exists,put it back into the fiels(restore)
                if(saved!==null){
                x.value=saved
                }
            }
        })
    })
    // save values as user types/selects
    fields.forEach(x=>{
        x.addEventListener("input",()=>{
            if(x.type==="checkbox"){
                let selected=[]
                document.querySelectorAll('input[name="hobby"]:checked').forEach(cb=>{
                    selected.push(cb.value)
                })
                localStorage.setItem("hobbies",JSON.stringify(selected))
            }else if(x.type==="radio"){
                if(x.checked){
                    localStorage.setItem("gender",x.value)
                }
            }else{
                localStorage.setItem(x.id,x.value)
            }
        })
    })
*/
// to clear this we can use
        //localStorage.clear()--->this will clear all
        //localStorage.removeItem("name")  // this will only remove one




/*Same questions without any commants */

/*
    const form=document.getElementById("forms")
    const fields=form.querySelectorAll("input,textarea,select")

    //Restore saved values
    window.addEventListener("load",()=>{
        fields.forEach(field=>{
            if(field.type==="checkbox"){
                let saved =JSON.parse(localStorage.getItem("hobbies"))||[]
                field.checked=saved.includes(field.value)
            }else if(field.type==="radio"){
                //restore radio group
                let saved=localStorage.getItem("gender")
                if(saved && field.value===saved){
                    field.checked=true
                }
            }
            else{
                //restore normal input/textarea/select
                let saved=localStorage.getItem(field.id)
                if(saved!==null){
                    field.value=saved
                }
            }
        })
    })
    fields.forEach(field=>{
        field.addEventListener("input",()=>{
            if(field.type==="checkbox"){
                let selected=[]
                document.querySelectorAll('input[name="hobby"]checked').forEach(cb=>{
                    selected.push(cb.value)
                })
                localStorage.setItem("hobbies",JSON.stringify(selected))
            }else if(field.type==="radio"){
                if(field.checked){
                    localStorage.setItem("gender",field.value)
                }
            }else{
                localStorage.setItem(field.id,field.value)
            }
        })
    })
    // localStorage.clear()
    //localStorage.removeItem("name")
*/
/*
    const scrolls=document.querySelector(".thirteen")
    const progress=document.querySelector(".progress")
    window.addEventListener("scroll",()=>{
        let windowscrl=window.scrollY
        const maxheight=document.documentElement.scrollHeight-window.innerHeight
    let result=windowscrl/maxheight*100
    console.log('res',result)
        progress.style.width=`${result}%`
    })
*/



/*
    let colors=["red","pink","orange","green","yellow","black","brown","blue","grey"]
    const btn=document.getElementById("btn")
    const bgrd=document.querySelector(".layout")
    let randomno
    function random(){
    randomno=Math.floor(Math.random()*colors.length-1)+0
        return randomno
    }
        btn.addEventListener("click",()=>{
        random()
        bgrd.style.backgroundColor=`${colors[randomno]}`
    })
    // with out button
    setInterval(()=>{
        random()
        bgrd.style.backgroundColor=`${colors[randomno]}`
    },2000)
*/

/*
    let image=document.getElementById("image")
    let container=document.querySelector(".container")
    image.addEventListener("click",()=>{
        let div=document.createElement("div")
        div.textContent="This image is related to patters"
        container.appendChild(div)
        return
    })
*/

// let inputval=document.getElementById("inputval")
// let clr=document.getElementById("clear")
// let minus=document.getElementById("minus")
// let dlt=document.getElementById("dlt")
// let mult=document.getElementById("mult")
// let mod=document.getElementById("mod")
// let plus=document.getElementById("pls")
// let eql=document.getElementById("eql")

/*
    
    let num1=document.getElementById("num1")
    let num2=document.getElementById("num2")
    let plus=document.getElementById("plus")
    let minus=document.getElementById("min")
    let div=document.getElementById("div")
    let mult=document.getElementById("mult")
    let eql=document.getElementById("eql")
    let ans=document.getElementById("ans")
    let result
    ans.textContent=""
    plus.addEventListener("click",()=>{
    let no1=Number(num1.value)
    let no2=Number(num2.value)
    result=no1+no2
    ans.textContent=`${no1}+${no2}=${result}`
    })
    minus.addEventListener("click",()=>{
        let no1=Number(num1.value)
        let no2=Number(num2.value)
        result=no1-no2
        ans.textContent=`${no1}-${no2}=${result}`
    })
    div.addEventListener("click",()=>{
        let no1=Number(num1.value)
        let no2=Number(num2.value)
        result=no1/no2
        ans.textContent=`${no1}/${no2}=${result}`
    })
    mult.addEventListener("click",()=>{
        let no1=Number(num1.value)
        let no2=Number(num2.value)
        result=no1*no2
        ans.textContent=`${no1}*${no2}=${result}`
    })
*/


/*
    //updatedversion
    let num1=document.getElementById("num1")
    let num2=document.getElementById("num2")
    let ans=document.getElementById("ans")
        let plus=document.getElementById("plus")
        let minus=document.getElementById("min")
        let div=document.getElementById("div")
        let mult=document.getElementById("mult")
        let clr=document.getElementById("clr")

    function Calculate(op){
        let no1=Number(num1.value)
        let no2=Number(num2.value)
        switch(op){
            case '+': result=no1+no2
                        break;
            case '-': result=no1-no2
                        break;
            case '/':result=no1/no2 
                        break
            case'*':result=no1*num2
                        break
        }
        ans.textContent=`${no1}${op}${no2}=${result}`

    }

    plus.addEventListener("click",()=>Calculate('+'))
    minus.addEventListener("click",()=>Calculate('-'))
    div.addEventListener("click",()=>Calculate('/'))
    mult.addEventListener("click",()=>Calculate('*'))
    clr.addEventListener("click",()=>{
    num1.value=""
    num2.value=""
        ans.textContent=" "
        
    })
*/

/*
    const text=document.getElementById("txt")
    let count=document.getElementById("count")
    text.addEventListener("input",()=>{
        if(text.value.length>100){
            text.value=text.value.slice(0,100)
        }else{
        count.textContent=`${text.value.length}/100`
        }
    })
*/

/*
    const image=document.getElementById("image")
    const inpt=document.getElementById("password")
    const lmt=document.getElementById("lmt")
    image.addEventListener("click",()=>{
    if(inpt.type=="text"){
        inpt.type="password"
    }else{
        inpt.type="text"
    }
        
    })
    inpt.addEventListener("input",()=>{
        if(inpt.value.length>10){
            lmt.textContent="* Password can't be more than 10"
            inpt.value=inpt.value.slice(0,10)
        }
    })
*/

/*
    let red=document.getElementById("red")
    let pink=document.getElementById("pink")
    let yellow=document.getElementById("yellow")
    let black=document.getElementById("black")
    let white=document.getElementById("white")
    let grey=document.getElementById("grey")
    let blue=document.getElementById("blue")
    let layout=document.querySelector(".panel")
    function background(clr){
        let bg=layout.style.backgroundColor=`${window.getComputedStyle(clr).backgroundColor}`
        console.log(bg)
    }
    red.addEventListener("click",()=>background(red))
    pink.addEventListener("click",()=>background(pink))
    yellow.addEventListener("click",()=>background(yellow))
    white.addEventListener("click",()=>background(white))
    grey.addEventListener("click",()=>background(grey))
    blue.addEventListener("click",()=>background(blue))
    black.addEventListener("click",()=>background(black))
*/



/*
    let text=document.getElementById("text")
    let btn=document.getElementById("add")
    let unorderd=document.getElementById("unorderd")
    btn.addEventListener("click",()=>{
        let content=text.value
        let li=document.createElement("li")
        li.id="list"
        li.textContent=content

        unorderd.appendChild(li)
        let span=document.createElement("span")
        span.id="cross"
        span.textContent="\u00d7"
        li.appendChild(span)
        let cross=document.getElementById("cross")
        cross.addEventListener("click",()=>{
            li.remove()
        })
        let list=document.getElementById("list")
        list.addEventListener("click",()=>{
            li.style.textDecoration="line-through"
        })
        text.value=" "
    })
*/


/*
    let nxt=document.getElementById("nxt")
    let prev=document.getElementById("prev")
    let container=document.querySelector(".container")
    let images=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2Z4JnijMl8QAvhF-YVwseDPVo_hJB68gpw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNjSxOuRteHvgjdkrNvmNSukYdR2xnKKdmQ&s"]
    let img=document.createElement("img")
    container.append(img)

    let current=0
    img.src=images[current]
    nxt.addEventListener("click",()=>{
    img.src=images[current]   
    current++
    if(current>=images.length){
        current=0
    }
    })
    prev.addEventListener("click",()=>{
        img.src=images[current]
        current--
    if(current<0){
        current=images.length-1
    }
    })
*/


/*
    let All=document.getElementById("all")
    let fruit=document.getElementById("fruit")
    let vegetable=document.getElementById("vege")
    let Drinks=document.getElementById("Drk")
    let out=document.getElementById("list")
    let list=document.querySelectorAll("#list li")
    let navli=document.querySelectorAll(".navli")

    function setActive(button){
        navli.forEach(btn=>btn.classList.remove("active"))
        button.classList.add("active")
    }
    fruit.addEventListener("click",()=>{
        setActive(fruit)
        list.forEach(x => {
            if(x.id=="frt")
            {
            x.style.display="block"
            }
            else{
                x.style.display="none"
            }
        });
    })
    All.addEventListener("click",()=>{
        setActive(All)
        list.forEach(x=>{
        x.style.display="block"
        })
    })
    vegetable.addEventListener("click",()=>{
        setActive(vegetable)
        list.forEach(x=>{ 
        if(x.id=="veg")
        {
            x.style.display="block"
        }
        else{
            x.style.display="none"
        }
    })
    })
    Drinks.addEventListener("click",()=>{
        setActive(Drinks)
        list.forEach(x=>{
            if(x.id=="jce"){
                x.style.display="block"
            }
            else{
                x.style.display="none"
            }
        })
    })
*/

/*
//Not completed
    let input=document.getElementById("input")
    let time=document.getElementById("time")
    let starttime=null
    input.addEventListener("input",()=>{
        if(!starttime){
            starttime=Date.now()
        timer=setInterval(()=>{
    let millisecds=Date.now()-starttime
    let secnds=(millisecds/1000)
    let mints=(secnds/60)

        time.textContent=`${mints.toFixed(2)} : ${secnds.toFixed(2).padStart(5,"0")}`
        let typedWords=input.value.trim().split(/\s+/).length
        let wpm=((typedWords/(millisecds/1000))*60).toFixed(2)
        console.log("wpm:",wpm)
    },200)
        }
    
    })
*/



/*
    let amount=document.getElementById("amount")
    let description=document.getElementById("description")
    let selected=document.getElementById("select")
    let btnclk=document.getElementById("btn")
    let amountul=document.getElementById("amountul")
    let descul=document.getElementById("descul")
    let cateul=document.getElementById("cateul")
    let tot=document.getElementById("tot")
    let total=0
    btnclk.addEventListener("click",()=>{
        let amounts=amount.value
        let descriptions=description.value
        let selectval=selected.value
        console.log(selectval)
        
    })
    amount.addEventListener("keydown",(event)=>{
        if(event.key==="Enter"){
            let amounts=amount.value
            let li=document.createElement("li")
            li.textContent=amounts
            amountul.appendChild(li)
            let amntEval=Number(amounts)
            total+=amntEval
            amount.value=""
        }
    })
    description.addEventListener("keydown",(event)=>{
            if(event.key==="Enter"){
                let descriptions=description.value
                let li=document.createElement("li")
                li.textContent=descriptions
                descul.appendChild(li)
                description.value=""
            }
    })
    selected.addEventListener("change",()=>{
        let selectval=selected.value
        let li=document.createElement("li")
        li.textContent=selectval
    cateul.appendChild(li)
    selected.value=""

    })
    btnclk.addEventListener("click",()=>{
    tot.textContent=total
    })
*/

/*
    let input=document.getElementById("input")
    let send=document.getElementById("send")
    let chat=document.getElementById("chat")
    let emojipnl=document.getElementById("emojipnl")
    let emoji=document.getElementById("emoji")
    let emojicont=document.getElementById("emojicont")
    let spanemo=document.querySelectorAll("span")
    emojipnl.style.display="none"
    send.addEventListener("click",()=>{
        let chats=input.value
        let li=document.createElement("li")
        li.textContent=chats
        chat.appendChild(li)
        input.value=""
        emojipnl.style.display="none"
    })
    emoji.addEventListener("click",()=>{
        console.log("hey")
        if(emojipnl.style.display==="none"){
            emojipnl.style.display="block"
        }
        else{
            console.log("oi")
            emojipnl.style.display="none"
        }
    })
        spanemo.forEach(x => {
            x.addEventListener("click",()=>{
                console.log(x.textContent) 
                input.value+=input.value+x.textContent
            })
        
        });

*/
