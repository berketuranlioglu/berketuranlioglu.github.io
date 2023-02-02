import MovingText from 'react-moving-text'
import Typewriter from 'typewriter-effect';
import { Stack } from '@mui/material';
import "../styles.css"

const Welcome = () => {
    return(
        <div className="maindiv gradient welcomeBackground splitScreen">
            <div className="leftSide">
                <div>
                    <MovingText
                    type="fadeInFromLeft"
                    duration="1800ms"
                    delay="0s"
                    direction="normal"
                    timing="ease-in"
                    iteration="1"
                    fillMode="none">
                        <span className='welcomeText'>
                        Welcome 👋
                        </span>
                    </MovingText>
                </div>
                <br></br><br></br><br></br>
                <div>
                <MovingText
                    type="fadeInFromLeft"
                    duration="2200ms"
                    delay="0s"
                    direction="normal"
                    timing="ease-in"
                    iteration="1"
                    fillMode="none">
                        <Stack direction="row">
                        <span className='welcomeText'>
                            <Typewriter
                            onInit={(typewriter) => {
                                typewriter.pauseFor(2500)
                                .changeDelay(40)
                                .changeDeleteSpeed(40)
                                .typeString("I'm Berke Turainlo")
                                .pauseFor(500)
                                .deleteChars(8)
                                .pauseFor(200)
                                .typeString('Turanlgiol')
                                .pauseFor(500)
                                .deleteChars(10)
                                .pauseFor(200)
                                .typeString('Turanlioglu')
                                .start();
                            }}
                            />
                            </span>
                        </Stack>
                    </MovingText>
                </div>
            </div>
            <div className="rightSide">
                <a href="#home" className='swipedownText'>
                    <MovingText
                    type="bounce"
                    duration="3000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease-in-out"
                    iteration="infinite"
                    fillMode="none">
                        &#x2193; Swipe down! &#x2193;
                    </MovingText>
                </a>
            </div>
        </div>
    );
}

export default Welcome;