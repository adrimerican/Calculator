import React from "react";
import "./ClearButton.css";

export const ClearButton = (props) => (
    <div className="clear-btn" onclick={props.handleClear}>
    {props.children}
    </div>
);
