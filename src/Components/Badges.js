import { useDocumentData } from 'react-firebase-hooks/firestore';
import { collection, doc } from "firebase/firestore"
import { db } from "../firebase"
import "../styles.css";

const Badges = () => {
    const ref = collection(db, "home");
    const docRef = doc(ref, "ContactInfos")
    const [data, isLoading] = useDocumentData(docRef);

    if (isLoading) {
        return <div>Loading the badges...</div>
    }
    else {
        return (
            <div className='shieldow'>
                {data.website.map((web) => (
                    <a href={web.url}>
                        <img src={web.badge} alt=""/>
                    </a>
                ))}
            </div>
        );
    }
}

export default Badges;