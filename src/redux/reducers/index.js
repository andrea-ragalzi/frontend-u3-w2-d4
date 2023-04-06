const addFavourite = (values, valueToAdd) => {
    if (values.includes(valueToAdd)) {
        return [...values];
    }
    return [...values, valueToAdd];
}

const deleteFavourite = (values, valueToDelete) => {
    return values.filter(value => value !== valueToDelete);
}


const initialState = {
    favourites: {
        companies: []
    }
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                favourites: {
                    companies: addFavourite(state.favourites.companies, action.payload)
                },
            }
        case 'DELETE_FROM_FAVOURITES':
            return {
                ...state,
                favourites: {
                    companies: deleteFavourite(state.favourites.companies, action.payload)
                },
            }
        default:
            return state;
    }
};

export default mainReducer;
