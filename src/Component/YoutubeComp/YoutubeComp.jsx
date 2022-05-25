import React from 'react';
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return (
        <div className='youtube-wrapper'>
            <div className='img-thumb'>
                <img src="https://miro.medium.com/max/1400/1*bmeMobUYaMw5A4fUXc9BVw.png" alt=""/>
                <p className='time'>{props.time}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'Title here',
    desc: "DEFAULT DESC"
}

export default YoutubeComp;