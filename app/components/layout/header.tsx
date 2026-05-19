import React from "react";

export function Header() {
    return (
        <header className="flex-2 w-full h-16 bg-white z-10 mb-5">
            <div className="container mx-auto h-full flex items-center px-4">
                <div>
                    <h1 className="text-lg font-bold">2Do</h1>
                    <p className="text-sm font-light">Task application</p>
                </div>
            </div>
        </header>
    );
}
