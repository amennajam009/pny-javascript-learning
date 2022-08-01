let givenvalue=document.getElementById('givenvalue');
button=document.querySelectorAll('button');
for(item of button){
    item.addEventListener('click',(e)=>{
     buttontext=e.target.innerText;
     console.log(buttontext);
     if(buttontext=='100'){
        
     }
    })
}