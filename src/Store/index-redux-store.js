import {configureStore} from '@reduxjs/toolkit';
import UIReducerFn from './ui-slice';
import CartReducerFn from './cart-slice';

const store = configureStore({
    reducer: {
        ui: UIReducerFn,
        cart: CartReducerFn,
    },
});

export default store;
