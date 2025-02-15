export interface Product {
  productID : string
  CreatedAt : Date
  productName : string
  productCategory : string
  productPrice: number
  imageURL: string[]
    isDiscounted : boolean
    discountedPrice : number
    isProductOnSaleSection: boolean
  productDescription: string
  productDeliveryOption: string
  isProductMadeInSL : boolean
  isProductOnFeaturedSection: boolean   
  isProductInStock: boolean
  }
  