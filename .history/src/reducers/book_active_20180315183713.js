export default function activeBook(state=null,action){
    switch (action.type) {
        case value: 'SELECTED_BOOK'
            return action.payload;
            break;    
        default:
            return state
            break;
    }
}