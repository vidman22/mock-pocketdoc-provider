import React from 'react'

export default function BackDrop(props) {
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div className={cssClasses.join(' ')} onClick={props.togglemodal}></div>;
}
