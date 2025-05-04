export function calcReducer(state,action){
    switch (action.type) {
        case "SET_NUMBER1":
            console.log(state);
            return {...state, number1 : action.payload};
        case "SET_NUMBER2":
            console.log(state);
            return {...state, number2 : action.payload};
        case "ADDED":
            return {...state, result : action.payload};
        case "SUBTRACT":
            return {...state, result : action.payload};
        case "MULTIPLE":
            return {...state, result : action.payload};
        case "DIVIDE":
            return {...state,result : action.payload};    
        default:
            return {...state};
    }
}