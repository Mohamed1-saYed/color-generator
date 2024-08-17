
let btn = document.querySelector("button");

let inp = document.getElementById("inb");

let def = document.getElementById("def");

btn.addEventListener("click",function(){
let random = Math.random().toString(12).slice(2,8);
document.body.style.background = `#${random}`;
inp.value = random;
})

def.onclick = () =>{
    document.body.style.background = "none";
    inp.value = ""
}

document.body.style.height = "90vh"

/*
استخدمت طريقة الهيكسا ديسمل

وقولت 
Math.random().toString(12).slice(2,8);

الرقم العشوائي اللي هيطلع حوله ل 
string
ثم خذ من اندكس 2 ل 7 عشان اضمن ان الصفر ميبقاش مطبوع 
 و 2 ل 7 يعني 6 ارقام لان الهيكسا ديسلم تتكون من 6 ارقام واحرف
وكما نعرف ان اللون في الهيكسا ديسمل يسبقها 
(#)
فوضعت ال 
(#)
قبل المتغير
 `#${random}`
document.body.style.background = `#${random}`;


قولت ان ال 
input.value 
تساوي القيمة اللي هتطلع من ال 
اللي اسمها method  
random()

بعد العمليات اللي هتم فيها زي انها هتتحول ل
string
وهتطبع 6 ارقام فقط

*/




