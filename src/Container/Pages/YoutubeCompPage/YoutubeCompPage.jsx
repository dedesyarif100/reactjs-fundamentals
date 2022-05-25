import React, { Component, Fragment } from "react";
import YoutubeComp from '../../../Component/YoutubeComp/YoutubeComp';

class YoutubeCompPage extends Component {
    render() {
        return(
            <Fragment>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                    time="7.12" 
                    title="Title Here"
                    desc="2x ditonton, 2 hari yang lalu"/>
                <YoutubeComp 
                    time="7.14" 
                    title="Title Here"
                    desc="20x ditonton, 2 hari yang lalu"/>
                <YoutubeComp 
                    time="8.12" 
                    title="Title Here"
                    desc="2x ditonton, 2 hari yang lalu"/>
                <YoutubeComp 
                    time="9.12" 
                    title="Title Here"
                    desc="2x ditonton, 2 hari yang lalu"/>
                <YoutubeComp/>
            </Fragment>
        )
    }
}

export default YoutubeCompPage;