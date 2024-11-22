import { db } from "@/firebase";
import { Product } from "@/types/Product";
import { doc, getDoc } from "firebase/firestore";

const loadSingleProduct = async (productID: string) => {
  try {
    const docRef = doc(db, "product", productID);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document exsists and successfully loaded! : loadSingleProduct");
      return {
        productID: docSnap.id,
        ...docSnap.data(),
      } as Product;
    } else {
      console.log("No such document! : loadSingleProduct");
    }
  } catch (error) {
    console.log("error fetching data: loadSingleProduct");
  }
};

export default loadSingleProduct;