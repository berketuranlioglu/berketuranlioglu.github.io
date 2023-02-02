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

/*
<Carousel
                            className='screenshot'
                            useKeyboardArrows={true}
                            emulateTouch={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                const defStyle = { color: "rgb(176, 141, 226)", cursor: "pointer", padding:8 };
                                const style = isSelected
                                  ? { ...defStyle, color: "rgb(136, 101, 186)" }
                                  : { ...defStyle };
                                return (
                                  <span
                                    style={style}
                                    onClick={onClickHandler}
                                    onKeyDown={onClickHandler}
                                    value={index}
                                    key={index}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`${label} ${index + 1}`}
                                  >
                                    &#x2022;
                                  </span>
                                );
                              }}
                            >
                                {project.screenshots.map((ss) => (
                                    <img className='screenshot' src={ss} alt=''/>
                                ))}
                            </Carousel>
*/