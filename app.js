let btn =document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
    
    
    btn.addEventListener("click",function(){
    
      let item = document.createElement("li");
      item.innerText=inp.value;
      item.style.color="rgb(250,237,205)";
   
      let delbtn= document.createElement("button");
      delbtn.innerHTML='&#10060';
      delbtn.classList.add("delete");
      //delbtn.classList.add('bi','bi-check');


      item.appendChild(delbtn);
      ul.appendChild(item);
      inp.value="";
    });
    


    ul.addEventListener("click",function (event){
       if (event.target.nodeName == "BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
       }
    });

   
 