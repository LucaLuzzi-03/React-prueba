import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = ( initialState = {} ) => {

    
  const [ shoppingCart, setShoppingCart ] = useState<{ [ key:string ]: ProductInCart }>( initialState );

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

   
    setShoppingCart( (prevState) => {

        console.log({ count })

      if (!count) {
        delete prevState[product.id];
        return { ...prevState };
      } else {
        return { ...prevState, [product.id]: { count, ...product } };
      }
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