import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { createContext } from 'react';
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext; 

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

   const { counter, increaseBy } = useProduct({ product, onChange, value })
 
    return (
        <Provider value={{
            product,
            counter,
            increaseBy
        }}>
            <div 
                className={ `${styles.productCard} ${className}` }
                style={ style }
            >

                {children}
                
                {/* Separar en pequeños componentes */}
                {/* <ProductImage img={product.img} />

                <ProductTitle title={product.title} />

                <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

            </div>
        </Provider>
    )
}