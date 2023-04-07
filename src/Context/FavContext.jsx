import { createContext, useReducer } from "react";

const FavContext = createContext();

const favoritos = JSON.parse(localStorage.getItem('favs'))

const initialState = {
    favs: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            if (state.favs === null) {
                localStorage.setItem('favs', JSON.stringify(action.payload))
                return { favs: [action.payload] }
            }
            if (state.favs.find(fd => fd.id === action.payload.id) === undefined) {
                localStorage.setItem('favs', JSON.stringify([...state.favs, action.payload]))
                return { favs: [...state.favs, action.payload] }
            }
            break
        case 'REMOVE':
            if (state.favs !== null){
                localStorage.setItem('favs', JSON.stringify(state.favs.filter(fav => fav.id !== action.payload)))
                return { favs: state.favs.filter(fav => fav.id !== action.payload) }
            }
            break
        default:
            console.log('error');
    }
}

const FavDataContext = ({ children }) => {

    if (favoritos !== null) {
        initialState.favs = [...favoritos]
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <FavContext.Provider value={{ state, dispatch }}>
            {children}
        </FavContext.Provider>
    )
}

export { FavContext, FavDataContext };