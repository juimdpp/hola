import React from 'react';
import './StylishButton.scss';

const StylishButton = ({ id, text, onClick }) => (
    <div id="stylish-button-container">
        <button id={id} class="stylish-button" onClick={() => onClick()}>
            <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
            </span>
            <span class="button-text">{text}</span>
        </button>
    </div>);

export default StylishButton;