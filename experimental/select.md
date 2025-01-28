# Experimental component - Select
```tsx
"use client"

import { useState } from "react";

export default function ExperimentalSelect({ options } : { options: string[] }) {

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
                    {options.map((_, index) => (
                        <a 
                            onClick={() => { setSelected(options[index]); setIsSelected(false)}}
                            key={index}>
                            {options[index]}
                        </a>
                    ))}
                </div>
            </div>

            <p className="mt-5">You have selected: {selected}</p>
        </>
    );
}
```