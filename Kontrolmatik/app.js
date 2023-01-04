var tabcontainers=document.querySelectorAll(".tab-container");
var taba=document.querySelectorAll(".tab-a");
const showPanel=(index)=>{
    console.log(".alıştı")
    tabcontainers[index].style.display="block";
}
const closePanel=(index)=>{
    tabcontainers[index].style.display="none";
}
