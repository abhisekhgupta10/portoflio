const bars= document.querySelector("i")
const navUl= document.querySelector("ul")

bars.addEventListener("click",()=>{
    if(navUl.style.left=="-200px")
    {
        navUl.style.left=0
    }
    else{
        navUl.style.left="-200px"
    }
})

window.onscroll = ()=>{
   
    if((document.documentElement.scrollTop >350)){
        if( navUl.style.left="0"){
            navUl.style.left="2000px"
        }
        else{
            navUl.style.left="2000px"
        }
    }
}