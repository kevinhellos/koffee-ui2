"use client";

import { useState } from "react";

export default function Pageclient() {

    const [isActive, setIsActive] = useState<boolean>(false);

    return (
    <>
        <div className="kf-collapsible">
            <div className="kf-collapsible-header"
                onClick={() => setIsActive(!isActive)}
            >
                Click me
            </div>
            <div className={`kf-collapsible-body ${isActive ? "kf-collapsible-active" : ""}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                quidem assumenda dolor velit expedita explicabo illo ipsa adipisci
                ullam mollitia.
            </div>
        </div>
    </>
    );
}
