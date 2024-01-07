import * as actionTypes from './actionTypes'

export const addItem = () => {
    return{ 
        type: actionTypes.ADD_ITEM, 
    }
}

export const deleteItem = (item) => {
    return{ 
        type: actionTypes.DELETE_ITEM, 
        item: item 
    }
}

export const editItem = (item) => {
    return{ 
        type: actionTypes.EDIT_ITEM, 
        item: item 
    }
}
export const setTitle = (title) => {
    return{ 
        type: actionTypes.SET_TITLE, 
        title: title 
    }
}
export const setDesc = (desc) => {
    return{ 
        type: actionTypes.SET_DESC, 
        desc: desc 
    }
}
export const setError = (element, error) => {
    return{ 
        type: actionTypes.SET_ERROR,
        element: element,
        error: error 
    }
}
export const deleteError = (element) => {
    return{ 
        type: actionTypes.DEL_ERROR,
        element: element
    }
}
export const setItem = (item) => {
    return{ 
        type: actionTypes.SET_ITEM, 
        item: item 
    }
}
export const setEdit = () => {
    return{ 
        type: actionTypes.SET_EDIT
    }
}
export const setSearch = (value) => {
    return{ 
        type: actionTypes.SET_SEARCH,
        searchValue: value
    }
}