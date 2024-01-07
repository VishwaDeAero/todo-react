import * as actionTypes from '../actions/actionTypes'

const initialState = {
    items: [],
    title: "",
    desc: "",
    item: "",
    searchValue: "",
    edit: false,
    search: false,
    error: {}
}

const items = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            const newitem = {
                id: Date.now(),
                title: state.title,
                desc: state.desc
            }
            return {
                ...state,
                items: state.items.concat(newitem),
                title: "",
                desc: "",
                error: {}
            }

        case actionTypes.EDIT_ITEM:
            var newList = [...state.items];
            var index = newList.indexOf(state.item);
            if (index !== -1) {
                newList[index].title = state.title;
                newList[index].desc = state.desc;
                return {
                    ...state,
                    title: "",
                    desc: "",
                    edit: false,
                    items: newList,
                    error: {}
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.DELETE_ITEM:
            newList = [...state.items];
            index = newList.indexOf(state.item);
            if (index !== -1) {
                newList.splice(index, 1);
                return {
                    ...state,
                    items: newList
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.SET_TITLE:
            return {
                ...state,
                title: action.title
            }
        case actionTypes.SET_DESC:
            return {
                ...state,
                desc: action.desc
            }
        case actionTypes.SET_ITEM:
            return {
                ...state,
                item: action.item,
                error: {}
            }
        case actionTypes.SET_ERROR:
            let newErrors = state.error;
            console.log("Errors", action.element, action.error);
            newErrors[action.element] = action.error;
            return {
                ...state,
                error: newErrors
            }
        case actionTypes.DEL_ERROR:
            let updatedErrors = state.error;
            delete updatedErrors[action.element];
            return {
                ...state,
                error: updatedErrors
            }
        case actionTypes.SET_EDIT:
            return {
                ...state,
                edit: true,
                error: {}
            }
        case actionTypes.SET_SEARCH:
            console.log(state)
            if((action.searchValue).length === 0){
                return{
                    ...state,
                    search: false,
                    searchValue: ""
                }
            }
            return {
                ...state,
                search: true,
                searchValue: action.searchValue
            }

        default:
            return state;
    }
}

export default items;