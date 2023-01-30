import Experience from "../Components/Experience";

function Resume() {
    return(
        <div id='resume' className="maindiv">
            <h2>Resume</h2>
            <br></br>
            <div className="row">
                <Experience />
            </div>
        </div>
    );
}

export default Resume;