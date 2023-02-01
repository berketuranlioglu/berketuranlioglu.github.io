import { useDocumentData } from 'react-firebase-hooks/firestore';
import { collection, doc } from "firebase/firestore"
import { db } from "../firebase"



const Experience = () => {
    const ref = collection(db, "resume");
    const docRef = doc(ref, "experience");
    const [data, isLoading] = useDocumentData(docRef);

    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        return(
            <div className='row'>
                {data.companies.map((exp) => (
                    <div>
                        <span className='experienceCompany'>{exp.company}</span>
                        <span className='experienceTime'>{exp.time}</span>
                        <br></br><br></br>
                        <span className='experienceRole'>{exp.role}</span>
                        <br></br>
                        {exp.description.map((description) => (
                            <div>
                                <span className='experienceDescription'>&#x2022; {description}
                                </span>
                            </div>
                        ))}
                        <br></br><br></br><br></br>
                    </div>
                ))}
            </div>
        );
    }
};

export default Experience;