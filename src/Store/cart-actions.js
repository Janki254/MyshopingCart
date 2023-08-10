import {cartAction} from './cart-slice';
import {UISliceAction} from './ui-slice';

//Fetching cart Data
export const fetchCartDataActionThunk = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://myshopingcart-e3944-default-rtdb.firebaseio.com/cart.json',
            );

            if (!response.ok) {
                throw new Error('Fetching Cart Data Fail!..');
            }

            const responseData = await response.json();

            return responseData;
        };
        try {
            const cartData = await fetchData();

            dispatch(
                cartAction.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                }),
            );
        } catch (error) {
            dispatch(
                UISliceAction.showNotification({
                    status: 'error',
                    title: 'Fail',
                    message: error.message,
                }),
            );
        }
    };
};

//Sendind Cart data
export const sendCartDataActionThunk = (cart) => {
    return async (dispatch) => {
        dispatch(
            UISliceAction.showNotification({
                status: 'Pending',
                title: 'Sending...',
                message: 'Sending cart data!.',
            }),
        );

        const sendRequest = async () => {
            const response = await fetch(
                'https://myshopingcart-e3944-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                    }),
                },
            );
            if (!response.ok) {
                throw new Error('Sending cart data Fail');
            }
        };

        try {
            await sendRequest();
            dispatch(
                UISliceAction.showNotification({
                    status: 'success',
                    title: 'Success...',
                    message: 'Sent cart data successfully!.',
                }),
            );
        } catch (error) {
            dispatch(
                UISliceAction.showNotification({
                    status: 'error',
                    title: 'Fail',
                    message: 'Sending cart data Failed!.',
                }),
            );
        }
    };
};
