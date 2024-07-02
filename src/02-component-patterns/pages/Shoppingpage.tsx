import {
    ProductCard,
    ProductButtons,
    ProductImage,
    ProductTitle,
} from "../components";

import '../styles/custom-styles.css';
import { useShoppingCart } from "../hooks/useShoppingCart";



export const Shoppingpage = () => {

   const { products, shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >

                {
                    products.map( product => (
                        <ProductCard 
                            key={product.id}
                            product={product} 
                            className="bg-dark"
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        > 
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white text-bold" />
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }


            </div>

            {/* Demostración real */}
            {/* <input value={ counter } onChange={ (e) => setCounter( e.target.value ) } */}

            <div className="shooping-cart">

                {
                    Object.entries( shoppingCart ).map( ([key, product]) => (
                        <ProductCard 
                            key={key}
                            product={product} 
                            className="bg-dark text-white" 
                            value={ product.count }
                            onChange={ onProductCountChange }
                            style={{
                            width: '100px'
                        }}>
                            <ProductImage className="custom-image"/>
                            <ProductButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
                

            </div>

        </div>
    );
};
