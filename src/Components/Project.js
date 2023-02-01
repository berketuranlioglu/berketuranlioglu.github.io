import { useDocumentData } from 'react-firebase-hooks/firestore';
import { collection, doc } from "firebase/firestore"
import { db } from "../firebase"
import { Stack } from '@mui/material';

const Project = () => {
    const ref = collection(db, "projects");
    const iosAppsRef = doc(ref, "ios_apps");
    const [iosAppsData, isLoading] = useDocumentData(iosAppsRef);

    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        return(
            <div>
                {iosAppsData.projects.map((project) => (
                    <Stack direction="row" justifyContent="space-between">
                        <Stack spacing={2} className='projectDescription'>
                            <span className='experienceCompany'>{project.name}</span>
                            <Stack spacing={2}>
                                {project.description.map((description) => (
                                    <span>{description}</span>
                                ))}
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            {project.screenshots.map((ss) => (
                                <img className='screenshot' src={ss} alt=''/>
                            ))}
                        </Stack>
                    </Stack>
                ))}
            </div>
        );
    }
};

export default Project;