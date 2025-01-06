// import { db } from "@/firebase"
// import { Order } from "@/types/Order";
// import { doc, getDoc } from "firebase/firestore"
// import loadSingleProduct from "./loadSingleProduct";
// import { Product } from "@/types/Product";

// const loadOrder = async (orderID: string) => {
//     try{

//         const docref = doc(db, 'order', orderID);
        
//         const docSnap = await getDoc(docref);
        
//         if (docSnap.exists()) {
//         return{
            
//             orderID: docSnap.id,
//             ...docSnap.data()
//         }as Order
//     } else {
//         console.log('no such Order')
//     }
//     }
//     catch{
//         console.log('Error fetching Orders')
//     }
// }

// const loadProducts = async (order: Order): Promise<Product[]> => {
//     const products: Product[] = await Promise.all(
//         order.orderItems.map(async (item) => {
//             const product = await loadSingleProduct(item.productID);
//             if (product) {
//                 return product;
//             } else {
//                 throw new Error(`Product not found for ID: ${item.productID}`);
//             }
//         })
//     );
//     return products;
// };
