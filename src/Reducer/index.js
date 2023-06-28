let initialState = {
    characters: []
}

export const character_reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_character":
            return {
                ...state, characters: action.payload
            }
        default:
            return state;
    }
}

let detailState = {
    detail: []
}
export const Detail_page = (state = detailState, action) => {
    switch (action.type) {
        case "Detail_character":
            return {
                ...state, detail: action.payload
            }
        default:
            return state;
    }
}