import React from "react";
import "../styles.css";
import Languages from "../Components/Languages"
import Badges from "../Components/Badges"

function Home() {
    return(
        <div id='home' className="maindiv">
            <h2>Hi there, I'm Berke 👋</h2>
            <p>
                🔭:
                I am an undergraduate student in Computer Science at Sabanci University.
                Besides, I am also balancing an internship on iOS Development.
            </p>
            <p>
                📱:
                With my internship, I am planning to explore and expand my knowledge
                for <span className="swiftText">Swift</span> and <span className="swiftText">SwiftUI</span> programming. I also share my simple iOS apps
                through GitHub so that they may benefit anyone who is eager to learn.
            </p>
            <p>
                💎:
                Other than iOS, you can find my other projects as well! For instance,
                check out the <a href="https://github.com/berketuranlioglu/devstore_project">Devstore e-commerce application</a> coded by me and my friends with Flutter!
            </p>

            <hr/>

            <h3>👨‍💻: Languages </h3>
            <div className="row">
                <Languages isDb="false" />&ensp;
            </div>

            <hr/>

            <h3>💾: Databases </h3>
            <div className="row">
                <Languages isDb="true" />&ensp;
            </div>

            <hr/>

            <h3> 📣: Contact me </h3>
            <p> You can reach me anytime.</p>
            <div className="shieldrow">
                <Badges/>
            </div>
        </div>
    );
}

export default Home;