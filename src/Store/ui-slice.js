import {createSlice} from '@reduxjs/toolkit';

const uiInitialState = {
    isCartShown: false,
    notification: null,
};
const uiSlice = createSlice({
    name: 'UI-Slice',
    initialState: uiInitialState,
    reducers: {
        ToggleCart(state) {
            state.isCartShown = !state.isCartShown;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

export const UISliceAction = uiSlice.actions;

export default uiSlice.reducer;
