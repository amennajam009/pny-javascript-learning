// today we're gonna know about the switch statement

function casenoone(val){
    let result = ""
    switch(val){
       case 1:
        result="yes it works";
        break;
        case 2:
            result="no it's not working";
            break;
        case 3:
            result="yup it absolutely working";
            break;
            
            
    }
    return result;
}
casenoone(2);

// switch statement with default 


 function defaultcase(val){

    let answer="";
    switch(val){
    
    case "a":
        answer="apple";
        break;
        
        case "b":
            answer="ball";
            break;

            case "c":
                answer="cats";
                break;
        
              default:
                answer="when no one statemnet is true so it will works in switch statement";   
    }

    return answer;
 }

 defaultcase(a);


//  multiple Identical Option in switch statements

    function downone(val){
        let answer="";

        switch(val){
         case 1:
         case 2:
        case 3:
            answer="this is low one";
            break; 
            
          case 4:
            case 5:
                case 6:
                    answer="this is medium one";
                    break;
                    
           case 7:
            case 8:
                case 9:
                    answer="this oneis the hight one";
                    break;
        }
        return answer;
    }
downone();
