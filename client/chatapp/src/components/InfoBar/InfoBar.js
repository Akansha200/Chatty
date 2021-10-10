import React from 'react';
import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.jpg';
import onlineIcon from '../../icons/onlineIcon.jpg';

const InfoBar = ({room}) => (
<div className="InfoBar">
    <div className="leftInnerContainer">
        <img className="outlineIcon" src={onlineIcon} />
        <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
        <a href="/"><img src={closeIcon} alt="close image" /></a>
    </div>
</div>

)
export default InfoBar;