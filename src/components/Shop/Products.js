import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        title: 'A Tablet',
        id: 'p1',
        price: 290.22,
        description: 'This is a first product - amazing!',
    },
    {
        title: 'A Laptop',
        id: 'p2',
        price: 785.02,
        description: 'This is a second product - amazing!',
    },
    {
        title: 'A Smart Phone',
        id: 'p3',
        price: 190.13,
        description: 'This is a third product - amazing!',
    },
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
