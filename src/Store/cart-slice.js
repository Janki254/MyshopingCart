import {createSlice} from '@reduxjs/toolkit';

const cartInitialState = {
    items: [],
    totalQuantity: 0,
    changed: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItems(state, action) {
            const new_item = action.payload;
            const existingItem = state.items.find(
                (item) => item.itemId === new_item.id,
            );
            if (!existingItem) {
                state.items.push({
                    title: new_item.title,
                    itemId: new_item.id,
                    price: new_item.price,
                    quantity: 1,
                    totalPrice: new_item.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    existingItem.totalPrice + new_item.price;
            }
            state.totalQuantity++;
            state.changed = true;
        },
        removeItems(state, action) {
            const delete_id = action.payload;
            const existingItem = state.items.find(
                (item) => item.itemId === delete_id,
            );
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(
                    (item) => item.itemId !== delete_id,
                );
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =
                    existingItem.totalPrice - existingItem.price;
            }
            state.totalQuantity--;
            state.changed = true;
        },
    },
});

// What is Thunk?
/**
     "A Thunks are custom Action Creator functions that delays an action ....means
    Action Creator functions that does NOT immediately returns action itself but
    returns anothr function which eventually returns the action."
 */

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
