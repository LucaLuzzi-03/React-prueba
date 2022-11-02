import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductButtons, ProductImage, ProductTitle } from './';

// export * from './ProductCard'
export * from './ProductTitle'
export * from './ProductImage'
export * from './ProductButtons'


export const ProductCard = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
} )


export default ProductCard;
