import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import { products } from '../data/products';

const product = products[0]


export const ShopingPage = () => {

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <ProductCard 
        key={ product.id }
        product={ product }
        initialValues={{
          count: 0,
          // maxCount: 10
        }}
      >
        {
          ({ reset, increaseBy, count, isMaxCountReached }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
          }
      </ProductCard> 



    </div>
  )
}
