import {useDispatch, useSelector} from 'react-redux';
import classes from './CartButton.module.css';
import {UISliceAction} from '../../Store/ui-slice';

const CartButton = (props) => {
    const totalItems = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(UISliceAction.ToggleCart());
    };

    return (
        <button onClick={toggleCartHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalItems}</span>
        </button>
    );
};

export default CartButton;
