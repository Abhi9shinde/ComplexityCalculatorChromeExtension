"use client";
import React, { useRef } from "react";
import Calculator from "../components/ui/Calculator";

export function Home() {
    const calculatorRef = useRef(null);
    return (
        <>
            {/* CALCULATOR */}
            <div id="calculator" ref={calculatorRef}>
                <Calculator />
            </div>
        </>
    );
}
