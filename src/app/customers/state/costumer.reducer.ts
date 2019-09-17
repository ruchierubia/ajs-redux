const initialState = {
    customers: [
        {
            name: "John Doe",
            phone:  "092343",
            address: "City",
            memebership: "Platinum",
            id: 1
        }
        
    ],
    loading: false,
    loaded: true 
};

export function customerReducer (state =  initialState, action) {
    switch(action.type) {
        case "LOAD_CUSTOMER": {
            return {
                ... state,
                loading: true,
                loaded: false
            }
        }

        default: {
            return state;
        }
    }
}