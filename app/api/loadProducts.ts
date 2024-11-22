import { db } from "@/firebase";
import { Product } from "@/types/Product";
import { collection, getDocs } from "firebase/firestore";


const loadProducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'product'));
        const products: Product[] = querySnapshot.docs.map((doc) => {
            return {
                productID: doc.id,
                ...doc.data(),
            } as Product;
        });
        return products
    }
    catch(error) {
        console.log('error fetching data: load All Products')
    }
}

export default loadProducts