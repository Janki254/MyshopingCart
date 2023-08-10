import {useDispatch} from 'react-redux';
import classes from './CartItem.module.css';
import {cartAction} from '../../Store/cart-slice';

const CartItem = (props) => {
    const {title, quantity, total, price, id} = props.item;

    const dispatch = useDispatch();

    const incrementItemHandler = () => {
        dispatch(
            cartAction.addItems({
                id,
                title,
                price,
            }),
        );
    };
    const decrementItemHandler = () => {
        dispatch(cartAction.removeItems(id));
    };

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={decrementItemHandler}>-</button>
                    <button onClick={incrementItemHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
