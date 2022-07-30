let merabutton =()=>{
    try {
       let mereinputvalue= document.querySelector('#inputemail').value;
       let inputfield=document.querySelector('#inputemail');
       let message="";
       let whereiwanttoshowmymessage=document.querySelector(".showmymessage");
       if(mereinputvalue==='yes'){
        inputfield.style.border = "1px solid green"
        message='hogya hai'
        whereiwanttoshowmymessage.innerHTML=message
       }
       else{
        inputfield.style.border = "1px solid red"
        message='nai hua hai'
        whereiwanttoshowmymessage.innerHTML=message
       }
    } catch (error) {
        console.log('error.message');
    }
}

let getvalueseven=()=>{
    try {
        let numberseven=document.querySelector('.seven').dataset.seven;
        console.log(numberseven)
    } catch (error) {
        console.log(error.message);
    }
}
let getvalueeight=()=>{
    try {
        let eightone=document.querySelector(".eight").dataset.eight;
        console.log(eightone)
    } catch (error) {
        
    }
}
let getvaluenine=()=>{
    try {
        let nineone=document.querySelector(".nine").dataset.nine;
        console.log(nineone)
    } catch (error) {
        
    }
}
