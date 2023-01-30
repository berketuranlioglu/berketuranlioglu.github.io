import { useDocumentData } from 'react-firebase-hooks/firestore';
import { collection, doc } from "firebase/firestore"
import { db } from "../firebase"



const Experience = () => {
    const ref = collection(db, "resume");
    const docRef = doc(ref, "2RsaCPNZZa62XhOLTr50");
    const [docData, isLoading] = useDocumentData(docRef);

    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        return(
            <div>{docData.experience}</div>
        );
    }
};

export default Experience;