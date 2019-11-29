import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    winter: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    summer: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) { // northern hemisphere
        return lat > 0 ? 'summer' : 'winter';
    } else { // southern hemisphere
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]; //
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left icon massive ${iconName}`} />
            <h1>{text}</h1>
            <i className={`icon-right icon massive ${iconName}`} />
        </div>
    )
}

export default SeasonDisplay;