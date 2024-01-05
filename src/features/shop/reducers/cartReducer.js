let initState = {
    items: [
    ],
    price: 0,
};

let activeState = initState;

// READ FROM LOCALSTORAGE IF EXISTS
if( localStorage.getItem("cart") != null && 
    JSON.parse(localStorage.getItem("cart")).items != null
){
    activeState = JSON.parse(localStorage.getItem("cart"));
}


const cartReducer = (state = activeState, action) => {
    if(action.type === "add"){
        // ADD action.value to state.items
        localStorage.setItem("cart", JSON.stringify({
            ...state,
            items: [
                ...state.items,
                action.value
            ]
        }));
        return {
            ...state,
            items: [
                ...state.items,
                action.value
            ]
        };
    }
    if(action.type === "delete"){
        // REMOVE action.value from state.items
        let newItems = [];
        
        state.items.forEach((item) => {
            if(item !== action.value)newItems.push(item);
        })

        localStorage.setItem("cart", JSON.stringify({
            ...state,
            items: [
                ...newItems
            ]
        }));
        return {
            ...state,
            items: [
                ...newItems
            ]
        }
    }
    if(action.type === "increase"){
        // INCREASE state.price with action.value 
        localStorage.setItem("cart", JSON.stringify({
            ...state,
            price: state.price + action.value,
        }));
        return {
            ...state,
            price: state.price + action.value,
        };
    }
    if(action.type === "decrease"){
        // DECREASE state.price with action.value 
        localStorage.setItem("cart", JSON.stringify({
            ...state,
            price: Math.max(0, state.price - action.value),
        }));
        return {
            ...state,
            price: Math.max(0, state.price - action.value),
        }
    }
    if(action.type === "clear"){
        localStorage.removeItem("cart");
        return {
            items: [
            ],
            price: 0,
        };
    }

    localStorage.setItem("cart", JSON.stringify(state));
    return state;
}

export default cartReducer;