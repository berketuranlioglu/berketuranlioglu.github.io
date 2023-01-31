import MovingText from 'react-moving-text'
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
                        <span className='welcomeText'>
                        I am Berke Turanlioglu
                        </span>
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