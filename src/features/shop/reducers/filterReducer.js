const initState = {
    data: {
        "women-durability": {
            value: true,
            name: "Durability"
        },
        "women-classic": {
            value: true,
            name: "Classic"
        },
        "men-durability": {
            value: true,
            name: "Durability"
        },
        "men-classic": {
            value: true,
            name: "Classic"
        },
        "g-shock": {
            value: true,
            name: "G-Shock"
        },
        "seiko": {
            value: true,
            name: "Seiko"
        },
        "tissot": {
            value: true,
            name: "Tissot"
        },
        "orient": {
            value: true,
            name: "Orient"
        },
        "citizen": {
            value: true,
            name: "Citizen"
        },
        "claude-bernard": {
            value: true,
            name: "Claude Bernard"
        },
        "certina": {
            value: true,
            name: "Certina"
        }
    },
    price: {
        value: 6,
        name: "Price"
    },
    sort: {
        value: 0
    }
};

let activeState = initState;

// READ FROM LOCALSTORAGE IF EXISTS
if( localStorage.getItem("filter") != null && 
    JSON.parse(localStorage.getItem("filter")).data != null && 
    JSON.parse(localStorage.getItem("filter")).price != null && 
    JSON.parse(localStorage.getItem("filter")).sort != null
){
    activeState = JSON.parse(localStorage.getItem("filter"));
}
if(activeState === "")activeState = initState;

const filterReducer = (state = initState, action) => {
    if(action.type === "toggle"){
        localStorage.setItem("filter", JSON.stringify({
            ...state,
            data: {
                ...state.data,
                [action.id]: {
                    ...state.data[action.id],
                    value: action.v,
                }
            },
        }));
        return {
            ...state,
            data: {
                ...state.data,
                [action.id]: {
                    ...state.data[action.id],
                    value: action.v,
                }
            },
        }
    }
    if(action.type === "slide"){
        localStorage.setItem("filter", JSON.stringify({
            ...state,
            price: {
                value: action.v,
                name: "Price"
            },
        }));
        return {
            ...state,
            price: {
                value: action.v,
                name: "Price"
            },
        }
    }
    if(action.type === "sort"){
        localStorage.setItem("filter", JSON.stringify({
            ...state,
            sort: {
                value: action.v,
            }
        }));
        return {
            ...state,
            sort: {
                value: action.v,
            }
        }
    }
    if(action.type === "reset"){
        localStorage.setItem("filter", JSON.stringify(initState));
        return initState;
    }

    
    localStorage.setItem("filter", JSON.stringify(state));
    return state;
}

export default filterReducer;