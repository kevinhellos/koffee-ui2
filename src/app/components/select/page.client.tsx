"use client"

import { useState } from "react";

export default function Pageclient() {

    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>("");

    return (
        <>
            <div className="kf-select">
                <button 
                    className="kf-select-btn"
                    onClick={() => setIsSelected(true)}
                >
                    {selected ? selected : "Choose an option"}
                </button>
                <div className={`kf-select-option ${isSelected ? "kf-select-show" : ""}`}>
                    <a onClick={() => { setSelected("Option 1"); setIsSelected(false)}}>
                        Option 1
                    </a>
                    <a onClick={() => { setSelected("Option 2"); setIsSelected(false)}}>
                        Option 2
                    </a>
                    <a onClick={() => { setSelected("Option 3"); setIsSelected(false)}}>
                        Option 3
                    </a>
                </div>
            </div>

            <p className="mt-5">You have selected: {selected}</p>
        </>
    );
}
