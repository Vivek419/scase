const initial = {
    bookMark: [],
    record:[],
    data: []
}
const weather = (state = initial, action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
            console.log(action.payload)
            state.bookMark.unshift(action.name)
            return {
                ...state,
                record:action.payload
            }
        case "FETCH_DATA":
            console.log("reducer",action.payload)
        
            return{
                ...state,
                data:action.payload
            }
        

        default:
            return state


    }
};
export default weather;