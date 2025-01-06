import { db } from "@/firebase";
import { Workshop } from "@/types/workshop";
import { addDoc, collection } from "firebase/firestore";

async function addWorkshop(workshop: Workshop): Promise<void> {
    try {
        const workshopCollection = collection(db, "workshop"); // Reference to the "workshop" collection
        await addDoc(workshopCollection, workshop); // Add the workshop document
        console.log("Workshop added successfully");
    } catch (error) {
        console.error("Error adding workshop: ", error);
    }
}

export default addWorkshop;
