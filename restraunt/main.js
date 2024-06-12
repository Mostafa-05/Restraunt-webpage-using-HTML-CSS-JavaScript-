let burger=document.querySelector(".burger");
let navul=document.querySelector("nav ul");
let ullis=document.querySelectorAll(" nav ul li");
burger.onclick=function(){
    burger.classList.toggle("click");
    navul.classList.toggle("active");
}
console.log(ullis)
ullis.forEach((e)=>{
    e.addEventListener('click',function(event){
        burger.click();
    })
})




