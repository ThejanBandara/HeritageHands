import { db } from "@/firebase";
import { Workshop } from "@/types/workshop";
import { doc, getDoc } from "firebase/firestore";

const loadSingleWorkshop = async (workshopID: string) => {
  try {
    const docRef = doc(db, "workshop", workshopID);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document exsists and successfully loaded! : loadSingleWorkshop");
      return {
        workshopID: docSnap.id,
        ...docSnap.data(),
      } as Workshop;
    } else {
      console.log("No such document! : loadSingleWorkshop");
    }
  } catch  {
    console.log("error fetching data: loadSingleWorkshop");
  }
};

export default loadSingleWorkshop;