const appReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_HERO':
            return {
                selectedHeros: [...state.selectedHeros, action.payload]
            };
        case 'DELETE_HERO':
            return {
                selectedHeros: state.selectedHeros.filter(hero => hero.id !== action.payload)
            }
        default:
            break;

    }
}
 
export default appReducer;