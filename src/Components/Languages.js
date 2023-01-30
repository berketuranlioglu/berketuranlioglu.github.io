import { useDocumentData } from 'react-firebase-hooks/firestore';
import { collection, doc } from "firebase/firestore"
import { db } from "../firebase"
import "../styles.css";

const Languages = (isDatabase) => {
    const ref = collection(db, "home");
    const docRef = doc(ref, "LangAndData")
    const [data, isLoading] = useDocumentData(docRef);

    if (isLoading) {
        return <div>Loading the images...</div>
    }
    else {
        if (isDatabase.isDb === "false") {
            return (
                <div className='row'>
                    {data.languages.map((lang) => (
                        <img
                        id={lang}
                        src={lang}
                        className="photo"
                        title={lang}
                        alt=""
                        />
                    ))}
                </div>
            );
        } else {
        return (
            <div className='row'>
                {data.databases.map((lang) => (
                    <img
                    id={lang}
                    src={lang}
                    className="photo"
                    title={lang}
                    alt=""
                    />
                ))}
            </div>
        );
        }
    }
}

export default Languages;