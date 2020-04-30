import React from 'react'

export default function Modal(props) {
    const cssClasses = [
        "Modal",
        props.show ? "ModalOpen" : "ModalClosed"
      ];
    return (
        <div className={cssClasses.join(' ')}>
            My Modal
        </div>
    )
}
