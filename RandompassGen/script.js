
const passwordbox=document.getElementById("password")
const length=12
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase="abcdefghijklmnopqrstuvwxyz"
const numbers="123456790"
const speacial="!@#$%^&*()-+_"
const allchars=uppercase+lowercase+numbers+speacial
function passGen(){
    let password=""
    password+=uppercase[Math.floor(Math.random()*uppercase.length)]
    password+=lowercase[Math.floor(Math.random()*lowercase.length)]
    password+=numbers[Math.floor(Math.random()*numbers.length)]
    password+=speacial[Math.floor(Math.random()*speacial.length)]
    while(length>password.length){
    password+=allchars[Math.floor(Math.random()*allchars.length)]
    }
    passwordbox.value=password
}
function copying(){
    passwordbox.select()
    document.execCommand("copy")
}