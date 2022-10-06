// Counting Cards

let count = 0;

function cc(card){
   switch(card){
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
      count++;
      break;
     case 7:
     case 'j':
     case 'K':
     case 'L' :
     case 'm' :
       count -- ;
       break;

   }
   // thats how we can use if else statement in switch statement......!!!!

   if(count > 0){
     return count + "BET";
   }else{
    return count  + "Hold";
   }
}