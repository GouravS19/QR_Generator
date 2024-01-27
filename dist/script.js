// const { default: fetch } = require("cross-fetch")

let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

let btn=document.querySelector("#button")

btn.addEventListener("click",()=>{
    
    // console.log("enter somthing")
    let inputVal=document.querySelector("input").value
    let imgDiv=document.querySelector("#imgDiv")
    let imgTag=document.querySelector("#imgTag")
    let newUrl=url+inputVal
    fetch(newUrl)
    .then((res)=>{
        
        imgTag.classList.remove("hidden")
        imgTag.setAttribute("src",res.url)
        // console.log(res)
    })
    .catch((e)=>{
    })

})