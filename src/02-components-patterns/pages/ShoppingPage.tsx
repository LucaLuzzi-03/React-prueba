import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css'
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';



export const ShopingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart({});

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >    

      {
        products.map(product => (
          <ProductCard 
            key={ product.id }
            product={ product }
            className="bg-dark text-white"
            onChange={ onProductCountChange }
            value={ shoppingCart[product.id]?.count || 0 }
          >
            <ProductImage className="custom-image" />
            <ProductTitle title='hello world' className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard> 
        ) )
      }
      </div>

      <div className='shopping-cart' >

        {
          Object.entries( shoppingCart ).map( ([ key, product ]) => (
            <ProductCard 
                key={ key }
                product={ product }
                className="bg-dark text-white"
                style={{ width: '100px' }}
                value={ product.count }
                onChange={ onProductCountChange }
            >
                <ProductImage className="custom-image" />
                <ProductButtons 
                  className='custom-buttons'
                  style={{ display: 'flex', justifyContent: 'center' }}  
                />
            </ProductCard> 

          ) )
        }

      </div>
    </div>
  )
}
