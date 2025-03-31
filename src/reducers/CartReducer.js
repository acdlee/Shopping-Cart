// Initial State
export const initialState = [];

export function cartReducer (state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            // Check if the item is already in the shopping cart
            const targetIndex = state.findIndex(item => item.id == action.payload.id);

            if (targetIndex > -1) {
                // Update quantity
                return state.map((item, index) => index == targetIndex ? 
                    {
                        ...item,
                        quantity: item.quantity + 1,
                    } : item
                );
            } else {
                // Add new item
                return [
                    ...state, 
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        price: action.payload.price,
                        quantity: 1,
                    }
                ];
            }    

        case "REMOVE_ITEM":
            // Check if the item is already in the shopping cart
            if (action.payload.quantity > 1) {
                // Update quantity
                return state.map(item=> item.id == action.payload.id ? 
                    {
                        ...item,
                        quantity: item.quantity - 1,
                    } : item
                );
            } else {
                // Remove singleton item
                return state.filter(item => item.id != action.payload.id);
            }

        default:
            return state;
    }
}