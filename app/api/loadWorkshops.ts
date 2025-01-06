import { db } from "@/firebase";
import { Product } from "@/types/Product";
import { Workshop } from "@/types/workshop";
import { collection, getDocs } from "firebase/firestore";


const loadWorkshops = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'workshop'));
        const products: Workshop[] = querySnapshot.docs.map((doc) => {
            return {
                workshopID: doc.id,
                ...doc.data(),
            } as Workshop;
        });
        return products
    }
    catch {
        console.log('error fetching data: load All Products')
    }
}

export default loadWorkshops