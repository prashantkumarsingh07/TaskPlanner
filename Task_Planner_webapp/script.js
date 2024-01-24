const inputbox=document.querySelector("input");
const list=document.getElementById("list");
const buttn=document.querySelector("button");
const span=document.querySelector("span");


buttn.addEventListener("click",function(){
  if(inputbox.value==" ")
  {
    alert("Add some task first");
  }
  else 
  {
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    list.appendChild(li);

     let span=document.createElement("span");
     span.innerHTML="\u00D7";
     li.appendChild(span);
   
     

    }
    inputbox.value=" ";
    savedata();
    

  

})
list.addEventListener("click",function(e){
  if(e.target.tagName==="LI")
  {
    e.target.classList.toggle("checked");
    savedata();
  }
  else if(e.target.tagName==="SPAN")
  {
    e.target.parentElement.remove();
    savedata();
  }

});

function savedata(){
  localStorage.setItem("data",list.innerHTML);
}
function showtask(){
  list.innerHTML=localStorage.getItem("data");
}
showtask();




