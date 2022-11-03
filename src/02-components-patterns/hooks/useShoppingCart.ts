import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = ( initialState = {} ) => {

    
  const [ shoppingCart, setShoppingCart ] = useState<{ [ key:string ]: ProductInCart }>( initialState );

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

   
    setShoppingCart( (prevState) => {

      const productInCart: ProductInCart = prevState[product.id] || { ...product, count: 0 };

      if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
          productInCart.count += count;
          return {
            ...prevState,
            [product.id]: productInCart
          }
      }

      // Delete the product
      const { [product.id]: toDelete, ...rest } = prevState;
      return {...rest};

      // if (!count) {
      //   delete prevState[product.id];
      //   return { ...prevState };
      // } else {
      //   return { ...prevState, [product.id]: { count, ...product } };
      // }
    });
  }

  return {
    //* properties
        ...shoppingCart,
        shoppingCart,
    //* methods
    onProductCountChange

  }


}