import AddNewProductForm from '@/components/admin/AddNewProduct'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image'

const products = [
  {
    productID: 1,
    CreatedAt: "",
    productName: "Fire Mask (Gini Raksha)",
    productCategory: "Masks",
    productPrice: 12500,
    imageURL: [
      "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9818.jpg"
    ],
    isDiscounted: false,
    discountedPrice: 0,
    isProductOnSaleSection: false,
    productDescription: "The Fire Mask (“Gini Raksha”) is used in Sri Lankan festivals and cultural dances and also used as a home decoration while protecting from weird hazards which is a cultural belief among Sri Lankans. This wooden mask is painted in vibrant colors, with bulging eyes and protruding tongues.",
    productDeliveryOption: "S",
    isProductMadeInSL: true,
    isProductOnFeaturedSection: false,
    isProductInStock: true
  },

  {
    productID: 2,
    CreatedAt: "",
    productName: "Eagle Mask (Gurulu Raksha)",
    productCategory: "Masks",
    productPrice: 14500,
    imageURL: [
      "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9819.jpg"
    ],
    isDiscounted: true,
    discountedPrice: 12500,
    isProductOnSaleSection: true,
    productDescription: "The “Gurulu Raksha” is the portrait of a mythical solar bird devouring a snake. The snake that is located above the bird face is called Naga. “Gurulu” is decorated with the enemy snakes. The Sri Lankan mask (Gurulu Raksha) gives beauty, power and fame. These masks can be hung in homes as well as in other important places.",
    productDeliveryOption: "F",
    isProductMadeInSL: true,
    isProductOnFeaturedSection: false,
    isProductInStock: true
  },

  {
    productID: 3,
    CreatedAt: "",
    productName: "Peacock Mask green (Mayura Raksha)",
    productCategory: "Masks",
    productPrice: 8500,
    imageURL: [
      "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9819.jpg"
    ],
    isDiscounted: false,
    discountedPrice: 0,
    isProductOnSaleSection: false,
    productDescription: "“Mayura Raksha” Mask is a wood carving known for bringing peace, wealth and prosperity to house, business or property while warding off evil spirits. The masks represent three beautifully feathered peacocks on the sides and top of the mask. Contrary to its name, these masks are often used in ancient forms of dancing.",
    productDeliveryOption: "F",
    isProductMadeInSL: true,
    isProductOnFeaturedSection: false,
    isProductInStock: true
  },

  {
    productID: 4,
    CreatedAt: "",
    productName: "Peacock Mask blue (Mayura Raksha)",
    productCategory: "Masks",
    productPrice: 8500,
    imageURL: [
      "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9825.jpg"
    ],
    isDiscounted: false,
    discountedPrice: 0,
    isProductOnSaleSection: false,
    productDescription: "“Mayura Raksha” Mask is a wood carving known for bringing peace, wealth and prosperity to house, business or property while warding off evil spirits. The masks represent three beautifully feathered peacocks on the sides and top of the mask. Contrary to its name, these masks are often used in ancient forms of dancing.",
    productDeliveryOption: "F",
    isProductMadeInSL: true,
    isProductOnFeaturedSection: false,
    isProductInStock: true
  },

  {
    productID: 5,
    CreatedAt: "",
    productName: "Cobra Mask (Naga Raksha)",
    productCategory: "Masks",
    productPrice: 10000,
    imageURL: [
      "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9823.jpg"
    ],
    isDiscounted: false,
    discountedPrice: 0,
    isProductOnSaleSection: false,
    productDescription: "“Naga Raksha” mask as the name suggests is made up of numerous cobra hoods and depicts all the features of a demon having a ferocious face and a wide mouth with a set of sharp flesh eating teeth and a blood thirsty protruding tongue. This wooden mask is known for protection from all sorts of evil spirits.",
    productDeliveryOption: "S",
    isProductMadeInSL: true,
    isProductOnFeaturedSection: false,
    isProductInStock: false
  },

  {
    productID: 6,
    CreatedAt: "",
    productName: "Cobra Mask (Naga Raksha)",
    productCategory: "Masks",
    productPrice: 10500,
    imageURL: [
      "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9816.jpg"
    ],
    isDiscounted: false,
    discountedPrice: 8500,
    isProductOnSaleSection: false,
    productDescription: "“Naga Raksha” mask as the name suggests is made up of numerous cobra hoods and depicts all the features of a demon having a ferocious face and a wide mouth with a set of sharp flesh eating teeth and a blood thirsty protruding tongue. This wooden mask is known for protection from all sorts of evil spirits.",
    productDeliveryOption: "S",
    isProductMadeInSL: true,
    isProductOnFeaturedSection: true,
    isProductInStock: true
  },

  {
    productID: 7,
    CreatedAt: "",
    productName: "Cobra Mask Monochrome (Naga Raksha)",
    productCategory: "Masks",
    productPrice: 8500,
    imageURL: [
      "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9821.jpg"
    ],
    isDiscounted: false,
    discountedPrice: 0,
    isProductOnSaleSection: false,
    productDescription: "“Naga Raksha” mask as the name suggests is made up of numerous cobra hoods and depicts all the features of a demon having a ferocious face and a wide mouth with a set of sharp flesh eating teeth and a blood thirsty protruding tongue. This wooden mask is known for protection from all sorts of evil spirits.",
    productDeliveryOption: "F",
    isProductMadeInSL: true,
    isProductOnFeaturedSection: false,
    isProductInStock: false
  },
]

const AdminProductsPage = () => {
  return (
    <div className='w-full h-screen max-h-screen overflow-hidden'>
      <div className='w-full px-4 flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Products</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className=''>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>Add new Item</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new Product</DialogTitle>
            </DialogHeader>
            <AddNewProductForm />
          </DialogContent>
        </Dialog>

      </div>
      <Card className='mx-4 my-2 h-[85vh] max-h-[85vh] overflow-hidden bg-accent '>
        <CardContent className=''>
          <div className='max-h-[85vh] overflow-auto relative'>
            <Table className=''>
              <TableHeader className=' sticky top-0 bg-secondary'>
                <TableRow>
                  <TableHead className=""></TableHead>
                  <TableHead className="">Product Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>On Sale</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  products.map((product) => (
                    <TableRow key={product.productID}>
                      <TableCell><Image src={product.imageURL[0]} width={50} height={50} alt='product Image' className='rounded-lg' /></TableCell>
                      <TableCell>{product.productName}</TableCell>
                      <TableCell>{product.productCategory}</TableCell>
                      <TableCell className='text-nowrap'>Rs. {product.productPrice}.00</TableCell>
                      <TableCell><Badge className={`text-nowrap ${product.isProductInStock ? 'bg-green-500' : 'bg-red-500'}`}>{product.isProductInStock ? 'in Stock' : 'out of Stock'}</Badge></TableCell>
                      <TableCell><Badge variant={"outline"} className={`text-nowrap ${product.isProductOnSaleSection ? 'border-green-500 ' : 'border-red-500'}`}>{product.isProductOnSaleSection ? 'on sale' : 'not on sale'}</Badge></TableCell>
                      <TableCell ><Checkbox checked={product.isProductOnFeaturedSection ? true : false}></Checkbox></TableCell>
                      <TableCell className='flex '>
                        <button className='size-10 aspect-square mx-2 rounded-lg bg-blue-500 text-white flex items-center justify-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>
                        </button>
                        <button className='size-10 aspect-square mx-2 rounded-lg bg-red-500  text-white flex items-center justify-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminProductsPage