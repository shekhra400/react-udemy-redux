export default function(state=null,action){
    switch (action.type) {
        case value: 'SELECTED_BOOK'
            return action.payload;
        default:
            return state;
    }
}