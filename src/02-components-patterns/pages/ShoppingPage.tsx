import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShopingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
        <ProductCard product={ product }>
          <ProductCard.Image img='./coffee-mug.png' />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard> 

        <ProductCard product={ product }>
          <ProductImage img='./coffee-mug.png' />
          <ProductTitle title='hello world' />
          <ProductButtons />
        </ProductCard> 
      </div>
    </div>
  )
}
