export default function posts(state, action) {
    if(state == 'undefined'){
        return {}
    }
    console.log("Action type", action.type)
    switch(action.type){    
        case 'FormSubmitted':
            let newState = [];
            let j=0;
            newState[j] = action.payload;
            j += 1;
            for(let i = state.length-1; i >= 0; i -= 1){
                newState[j] = state[i]
                j += 1;
            }            
            console.log("new State", newState);
            return newState;  
        case 'EmptyField':
            return state;        
        default:
            return [];       
    }
}      
