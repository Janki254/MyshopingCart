import React, {useEffect} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchCartDataActionThunk,
    sendCartDataActionThunk,
} from './Store/cart-actions';
import Notification from './components/UI/Notification';

let loadNumber = 1;

function App() {
    const showCart = useSelector((state) => state.ui.isCartShown);
    const notification = useSelector((state) => state.ui.notification);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartDataActionThunk());
    }, [dispatch]);

    useEffect(() => {
        if (loadNumber <= 2) {
            loadNumber++;
            return;
        }
        if (cart.changed) {
            dispatch(sendCartDataActionThunk(cart));
        }
    }, [cart, dispatch]);

    return (
        <React.Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </React.Fragment>
    );
}

export default App;
